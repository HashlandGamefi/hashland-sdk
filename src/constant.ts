export function token() {
  if (process.env.NODE_ENV === 'production') {
    return {
      HC: '0x0000000000000000000000000000000000000000',
      HN: '0x0000000000000000000000000000000000000000',
      HCLP: '0x0000000000000000000000000000000000000000',
      BTC: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    }
  } else {
    return {
      HC: '0x79598a83E4619b3d86137ca51D8102d8Daf71310',
      HN: '0x5b08A6B4C18685190906cdF1A7301AE17e85f035',
      HCLP: '0x73A6C59d9B669247a30e56e8900F914f9e4ef223',
      BTC: '0xa10da6692a2881dd9824d189C43053d22A2D5195',
      BUSD: '0x6Cbb3Ef5A8c9743a1e2148d6DCA69f3ba26BC8C5',
    };
  }
};

export function contract() {
  if (process.env.NODE_ENV === 'production') {
    return {
      HNBox: '0x0000000000000000000000000000000000000000',
      HNUpgrade: '0x0000000000000000000000000000000000000000',
      HNMarket: '0x0000000000000000000000000000000000000000',
      HNPool: '0x0000000000000000000000000000000000000000',
      HCLPPool: '0x0000000000000000000000000000000000000000',
      InvitePool: '0x0000000000000000000000000000000000000000',
    };
  } else {
    return {
      HNBox: '0x84fB1b4FC574F5dC5161e0CecaD412501A7Bb968',
      HNUpgrade: '0x25ec013DB55B780A4d41e987aBB869320bb72E66',
      HNMarket: '0xcc5F082C29da48c658E4D9E0CB9dA1a55f498b04',
      HNPool: '0x4D9a65d55029aE12ef0A3CAfb04CB94af60daa17',
      HCLPPool: '0xa63Aa895E4104ef6834991922391F54986cd0A50',
      InvitePool: '0xAfbFc2b71c2b93D6C56DEd055Ea81e3187922E1D',
    };
  }
};

export function network() {
  if (process.env.NODE_ENV === 'production') {
    return {
      chainId: '0x38',
      chainName: 'BSC-Mainnet',
      rpcUrls: ['https://bsc-dataseed.binance.org/']
    };
  } else {
    return {
      chainId: '0x61',
      chainName: 'BSC-Testnet',
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/']
    };
  }
};