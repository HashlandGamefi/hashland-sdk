import { ethers, utils } from 'ethers';

let providers: ethers.providers.Web3Provider;
let signer: ethers.providers.JsonRpcSigner;

export const util = utils;

export function getProvider() {
  if (!providers) providers = new ethers.providers.Web3Provider((window as any).ethereum);
  return providers;
}

export function getSigner() {
  if (!signer) signer = getProvider().getSigner();
  return signer;
}

export function token() {
  if (process.env.NODE_ENV === 'production') {
    return {
      HC: '0x0000000000000000000000000000000000000000',
      HN: '0x0000000000000000000000000000000000000000',
      BTC: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    }
  } else {
    return {
      HC: '0x92d3F0Ace175f1552ED8eEC107Bdc4eC935C83cE',
      HN: '0xCfd90244D4788b61d1d79A77748C74a26d8b752b',
      BTC: '0xa10da6692a2881dd9824d189C43053d22A2D5195',
    };
  }
};

export function contract() {
  if (process.env.NODE_ENV === 'production') {
    return {
      HNBox: '0x0000000000000000000000000000000000000000',
      HNPool: '0x0000000000000000000000000000000000000000',
      HNUpgrade: '0x0000000000000000000000000000000000000000',
    };
  } else {
    return {
      HNBox: '0xe4f1685585FfdCA3a60e809984CAd4A1ECCc5620',
      HNPool: '0x4a70Ba0C1309fDeF78f6adDf9785eF1D90AaD8b1',
      HNUpgrade: '0x95d015042cAdEAEF26e9F3b770ce390164E343a9',
    };
  }
};