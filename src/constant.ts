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
      HN: '0xc96F6C913748dC751Dd0aAa9D78f0AE305a82283',
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
      HNBox: '0x369d7A2F447f066FCC842C37c557a073CBbBa214',
      HNUpgrade: '0xe5BB41e729E9e70Fb531a279F9dF500B37cA7F0F',
      HNMarket: '0x1781B52c118cf1D5f8D1e98DfF31CDBc9F4c75a1',
      HNPool: '0x0ebafD5c5B0F9945CaaaeacA774C7193d7698558',
      HCLPPool: '0xa63Aa895E4104ef6834991922391F54986cd0A50',
      InvitePool: '0xb003486101cFD69ddc2392c87Ca5075c0EBEAbF0',
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