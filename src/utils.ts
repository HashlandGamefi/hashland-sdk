import { ethers, utils, constants, BigNumber } from 'ethers';
import { token, network } from './constant';

let providers: any;
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

export function getRandomNumber(hnId: number, slot: string, base: number, range: number) {
  return BigNumber.from(utils.solidityKeccak256(['uint256', 'string'], [hnId, slot])).mod(range).add(base).toNumber();
}

export function getHnImg(hnId: number, level: number, preUrl?: string) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;

  const context = canvas.getContext('2d') as CanvasRenderingContext2D;

  const bg = new Image();
  bg.src = `${preUrl}/img/bg/${level}.png`;

  const hnClass = getRandomNumber(hnId, 'class', 1, 4);
  const hero = new Image();
  hero.src = `${preUrl}/img/class${hnClass}/hero.png`;

  const item1 = new Image();
  item1.src = `${preUrl}/img/class${hnClass}/item1/${getRandomNumber(hnId, 'item1', 1, 10)}.png`;

  const item2 = new Image();
  item2.src = `${preUrl}/img/class${hnClass}/item2/${getRandomNumber(hnId, 'item2', 1, 10)}.png`;

  context.drawImage(bg, 0, 0);
  context.drawImage(hero, 0, 0);
  context.drawImage(item1, 0, 0);
  context.drawImage(item2, 0, 0);

  return canvas.toDataURL();
}