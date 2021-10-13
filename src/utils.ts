import { ethers, utils, constants } from 'ethers';
import { token, network } from './constant';

let providers: ethers.providers.JsonRpcProvider;
let signer: ethers.providers.JsonRpcSigner;

export const util = utils;
export const constant = constants;

export const wallet = {
  getAccount: async () => {
    return await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
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
  addHC: async (img: string) => {
    return await (window as any).ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: token().HC,
          symbol: 'HC',
          decimals: 18,
          image: img,
        },
      },
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
  if (!signer) signer = new ethers.providers.Web3Provider((window as any).ethereum).getSigner();
  return signer;
}