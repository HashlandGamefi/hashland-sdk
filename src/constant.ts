export function token() {
  if (process.env.NODE_ENV === 'production') {
    return {
      HC: '0x0000000000000000000000000000000000000000',
      HCLP: '0x0000000000000000000000000000000000000000',
      HN: '0x0000000000000000000000000000000000000000',
      BTC: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    }
  } else {
    return {
      HC: '0x20a3276972380E3c456137E49c32061498311Dd2',
      HCLP: '0x73A6C59d9B669247a30e56e8900F914f9e4ef223',
      HN: '0xcb9D141B844cfAc88A7D3CfDcD7Ab42A9FAB47a4',
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
      HNBox: '0xaE5C885Eda69B379e3D5794ca339b402FFD9C9c8',
      HNUpgrade: '0xEfdfB31301117F851a515fB512102189FC960b81',
      HNMarket: '0x3c64aD6A65b16B262008c250b42596db53002b11',
      HNPool: '0x2dEa2D7F3b9e314EAFD41d46Ea062a5550b90AeA',
      HCLPPool: '0x51da1B85363a80B6981F5D3E5D0aC60f7f5dF2b3',
      InvitePool: '0x3A8708a4e07c73316c876228E2cC6d45157245ef',
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