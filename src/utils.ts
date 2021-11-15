import { ethers, utils, constants, BigNumber } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { token, network } from './constant';

export const util = utils;
export const constant = constants;

export const rpcProvider = new ethers.providers.JsonRpcProvider(network().rpcUrls[0]);
let web3Provider = newWeb3Provider(localStorage.getItem('walletType'));

function newWeb3Provider(walletType: string | null) {
  let provider;

  if (walletType == 'walletconnect') {
    provider = new WalletConnectProvider({
      rpc: {
        [network().chainId]: network().rpcUrls[0],
      },
    });
  } else if (walletType == 'coin98') {
    provider = (window as any).coin98;
  }
  else {
    provider = (window as any).ethereum;
  }

  return provider;
}

export const wallet = {
  getAccount: async (walletType: string | null) => {
    web3Provider = newWeb3Provider(walletType);
    localStorage.setItem('walletType', walletType ? walletType : 'metamask')
    return await web3Provider.request({ method: 'eth_requestAccounts' });
  },

  getChainId: async () => {
    return await web3Provider.request({ method: 'eth_chainId' });
  },

  addChain: async () => {
    return await web3Provider.request({
      method: 'wallet_addEthereumChain',
      params: [network()]
    });
  },

  addHC: async (img: string) => {
    return await web3Provider.request({
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
  return new ethers.providers.Web3Provider(web3Provider).getSigner();
}

export function getRandomNumber(hnId: number, slot: string, base: number, range: number) {
  return BigNumber.from(utils.solidityKeccak256(['uint256', 'string'], [hnId, slot])).mod(range).add(base).toNumber();
}

export function getHnImg(hnId: number, level: string, hashrates: number[], isOrigin?: boolean) {
  let fontSize = 12;
  let x1 = 145;
  let x2 = 275;
  let y = 39;

  if (isOrigin) {
    fontSize = 24;
    x1 = 395;
    x2 = 655;
    y = 79;
  }

  const cdnUrl = `//cdn.hashland.com/nft/images/hashland-nft-${hnId}-${level}.png?image_process=`;
  const resizeAndCrop = 'resize,w_512/crop,mid,w_410,h_512/';
  const watermark = `watermark,text_${window.btoa((hashrates[0] / 1e4).toFixed(4)).replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '')},type_enpnZnhpbmd5YW4,color_ffffff,size_${fontSize},g_nw,x_${x1},y_${y}/watermark,text_${window.btoa((hashrates[1] / 1e4).toFixed(4)).replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '')},type_enpnZnhpbmd5YW4,color_ffffff,size_${fontSize},g_nw,x_${x2},y_${y}`;

  return cdnUrl + (isOrigin ? '' : resizeAndCrop) + watermark;
}