import { ethers, utils, constants, BigNumber } from 'ethers';
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

export function getRandomNumber(hnId: number, slot: string, base: number, range: number) {
  return BigNumber.from(utils.solidityKeccak256(['uint256', 'string'], [hnId, slot])).mod(range).add(base).toNumber();
}

export async function getHnImg(hnId: number, level: number): Promise<string> {
  const cdnUrl = '//cdn.hashland.com/nft';

  const hnClass = getRandomNumber(hnId, 'class', 1, 4);

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;

  const context = canvas.getContext('2d') as CanvasRenderingContext2D;

  const sources: any[] = [
    { url: `${cdnUrl}/bg/${level}.png` },
    { url: `${cdnUrl}/class${hnClass}/effect/bg/${level}.png` },
    { url: `${cdnUrl}/class${hnClass}/hero.png` },
    { url: `${cdnUrl}/class${hnClass}/item1/${getRandomNumber(hnId, 'item1', 1, 10)}.png` },
    { url: `${cdnUrl}/class${hnClass}/item2/${getRandomNumber(hnId, 'item2', 1, 10)}.png` },
    { url: `${cdnUrl}/class${hnClass}/effect/hero/${level}.png` },
    { url: `${cdnUrl}/class${hnClass}/info.png` },
  ];

  let count = 0;
  return new Promise(resolve => {
    sources.map(obj => {
      obj.img = new Image();
      obj.img.crossOrigin = 'anonymous';
      obj.img.src = obj.url;
      obj.img.onload = () => {
        if (++count == 7) {
          sources.map(item => {
            context.drawImage(item.img, 0, 0);
          });
          resolve(canvas.toDataURL());
        }
      };
    });
  });
}