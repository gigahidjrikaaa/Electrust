const { Wallet, Transaction, Asset } = require('@meshsdk/core');

// Function to create an election
const createElectionOnCardano = async (electionData) => {
  try {
    const wallet = new Wallet();
    await wallet.enable();
    const tx = new Transaction({ wallet });

    // Define your election creation logic
    // Example: Mint a new token representing the election
    const { electionName, metadata } = electionData;
    const assetName = `ElectionToken_${electionName}`;
    const policyId = await wallet.mintAsset(assetName, 1); // Mint 1 token

    // Add metadata to the transaction
    tx.metadata.set(721, {
      [policyId]: {
        [assetName]: metadata,
      },
    });

    await tx.submit();
    return { success: true, message: 'Election created successfully', policyId, assetName };
  } catch (error) {
    console.error('Error creating election:', error);
    return { success: false, message: 'Election creation failed' };
  }
};

// Function to submit a vote
const submitVoteToCardano = async (voteData) => {
  try {
    const wallet = new Wallet();
    await wallet.enable();
    const tx = new Transaction({ wallet });

    // Define your vote submission logic
    // Example: Send a small amount of ADA to a specific address
    const { electionPolicyId, electionAssetName, voterAddress } = voteData;
    const asset = new Asset(electionPolicyId, electionAssetName, 1); // Representing the vote as a token transfer
    tx.sendAsset(voterAddress, asset);

    await tx.submit();
    return { success: true, message: 'Vote submitted successfully' };
  } catch (error) {
    console.error('Error submitting vote:', error);
    return { success: false, message: 'Vote submission failed' };
  }
};

module.exports = {
  createElectionOnCardano,
  submitVoteToCardano,
};
