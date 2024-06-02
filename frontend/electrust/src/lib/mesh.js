import { Mesh, Wallet, Transaction } from '@meshsdk/core';

const mesh = new Mesh({
  network: 'testnet', // or 'mainnet'
  apiKey: process.env.NEXT_PUBLIC_MESH_API_KEY, // if needed
});

export const connectWallet = async () => {
  const wallet = new Wallet();
  await wallet.enable();
  return wallet;
};

export const submitVote = async (wallet, voteData) => {
  const tx = new Transaction({ wallet });
  // Define transaction logic based on voteData
  // e.g., send ADA to a specific address or interact with a smart contract
  await tx.submit();
};
