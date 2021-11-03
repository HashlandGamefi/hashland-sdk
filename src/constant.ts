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
      HNBox: '0x4fF6f8a9E89C6D9a93f7137fc6C95a968b1C465E',
      HNUpgrade: '0x09Bb3E27b768f99Fdf8C0C58eB9714376541257f',
      HNMarket: '0x93C40b39D093Fdbd4A5Fa4B7A5A2F5D901519c3A',
      HNPool: '0x063756da0f7c91793a3229F567C38e87BA1Cd0a4',
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