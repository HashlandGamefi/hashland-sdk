import { ethers, utils, constants, BigNumber } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { token, network } from './constant';

export const util = utils;
export const constant = constants;

export const rpcProvider = new ethers.providers.JsonRpcProvider(network().rpcUrls[0]);
let web3Provider = newWeb3Provider(localStorage.getItem('isWalletConnect'));

function newWeb3Provider(isWalletConnect?: string | null) {
  if (isWalletConnect == 'true') {
    return new ethers.providers.Web3Provider(
      new WalletConnectProvider({
        rpc: {
          [network().chainId]: network().rpcUrls[0],
        },
      }));
  }
  else {
    return new ethers.providers.Web3Provider((window as any).ethereum);
  }
}

export const wallet = {
  getAccount: async (isWalletConnect?: string | null) => {
    web3Provider = newWeb3Provider(isWalletConnect);
    isWalletConnect ? localStorage.setItem('isWalletConnect', 'true') : localStorage.removeItem('isWalletConnect');
    return await web3Provider.send('eth_requestAccounts', []);
  },

  getChainId: async () => {
    return await web3Provider.send('eth_chainId', []);
  },

  addChain: async () => {
    return await web3Provider.send('wallet_addEthereumChain', [network()]);
  },

  addHC: async (img: string) => {
    return await web3Provider.send('wallet_watchAsset',
      [{
        type: 'ERC20',
        options: {
          address: token().HC,
          symbol: 'HC',
          decimals: 18,
          image: img,
        },
      }]);
  },

  onAccountChanged: (handleAccountsChanged: any) => {
    web3Provider.on('accountsChanged', handleAccountsChanged);
  },

  onChainChanged: (handleChainChanged: any) => {
    web3Provider.on('chainChanged', handleChainChanged);
  },

  onDisconnect: (handleDisconnect: any) => {
    web3Provider.on('disconnect', handleDisconnect);
  },
}

export function getSigner() {
  return web3Provider.getSigner();
}

export function getRandomNumber(hnId: number, slot: string, base: number, range: number) {
  return BigNumber.from(utils.solidityKeccak256(['uint256', 'string'], [hnId, slot])).mod(range).add(base).toNumber();
}