import { ethers, utils } from 'ethers';
import { network } from './constant';

let providers: ethers.providers.JsonRpcProvider;
let signer: ethers.providers.JsonRpcSigner;

export const util = utils;

export const wallet = {
  getAccount: async () => {
    return (await (window as any).ethereum.request({ method: 'eth_requestAccounts' }))[0];
  },
  getChainId: async () => {
    return await (window as any).ethereum.request({ method: 'eth_chainId' });
  },
  addChain: async () => {
    return await (window as any).ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [network()]
    });
  },
  onAccountChanged: (handleAccountsChanged: any) => {
    (window as any).ethereum.on('accountsChanged', handleAccountsChanged);
  },
  onChainChanged: (handleChainChanged: any) => {
    (window as any).ethereum.on('chainChanged', handleChainChanged);
  },
}

export function getProvider() {
  if (!providers) providers = new ethers.providers.JsonRpcProvider(network().rpcUrls[0]);
  return providers;
}

export function getSigner() {
  if (!signer) signer = getProvider().getSigner();
  return signer;
}