{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE OverloadedStrings   #-}
{-# LANGUAGE TypeApplications    #-}
{-# LANGUAGE TypeFamilies        #-}
{-# LANGUAGE TypeOperators       #-}

module Voting where

import           Plutus.V1.Ledger.Api
import           Plutus.V1.Ledger.Contexts
import           PlutusTx.Prelude hiding (Semigroup(..), unless)
import           PlutusTx
import           Ledger
import           Ledger.Constraints as Constraints
import           Ledger.Typed.Scripts as Scripts
import           Prelude (Semigroup(..))

-- Define a data type for an election
data Election = Election
    { electionId   :: !BuiltinByteString
    , candidates   :: ![BuiltinByteString]
    , endTime      :: !POSIXTime
    } deriving Show

-- Define a data type for a vote
data Vote = Vote
    { voterId      :: !PubKeyHash
    , candidate    :: !BuiltinByteString
    } deriving Show

-- Define the validator logic
{-# INLINABLE mkValidator #-}
mkValidator :: Election -> Vote -> ScriptContext -> Bool
mkValidator election vote ctx = traceIfFalse "Election has ended" isNotExpired &&
                                traceIfFalse "Invalid candidate" isValidCandidate
  where
    info :: TxInfo
    info = scriptContextTxInfo ctx

    isNotExpired :: Bool
    isNotExpired = contains (to $ endTime election) (txInfoValidRange info)

    isValidCandidate :: Bool
    isValidCandidate = candidate vote `elem` candidates election

-- Define the data types to be used in the validator
data Voting
instance Scripts.ValidatorTypes Voting where
    type instance DatumType Voting = Election
    type instance RedeemerType Voting = Vote

typedValidator :: Scripts.TypedValidator Voting
typedValidator = Scripts.mkTypedValidator @Voting
    $$(PlutusTx.compile [|| mkValidator ||])
    $$(PlutusTx.compile [|| wrap ||])
  where
    wrap = Scripts.wrapValidator @Election @Vote

validator :: Validator
validator = Scripts.validatorScript typedValidator

valHash :: Ledger.ValidatorHash
valHash = Scripts.validatorHash typedValidator

scrAddress :: Ledger.Address
scrAddress = scriptAddress validator
