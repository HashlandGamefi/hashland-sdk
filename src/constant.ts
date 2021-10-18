export function token() {
  if (process.env.NODE_ENV === 'production') {
    return {
      HC: '0x0000000000000000000000000000000000000000',
      HN: '0x0000000000000000000000000000000000000000',
      BTC: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    }
  } else {
    return {
      HC: '0x33288a521B768A3F47445c6cdc6696f4a3Cae29b',
      HN: '0x0cfca9fa7ba49f174acc0e74e0a06460584cea58',
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
      HNMarket: '0x0000000000000000000000000000000000000000',
      InvitePool: '0x0000000000000000000000000000000000000000',
    };
  } else {
    return {
      HNBox: '0xc551b39d6a03998e4d7cc2166f28a48c500362cb',
      HNPool: '0xa425373b97bcaeaec9a58d867149ee5680badecf',
      HNUpgrade: '0x271c9bb899d2b5d985f5fb649fcd26fdcf0c3d6a',
      HNMarket: '0xb5b52fdb724edf16254962931cb71ccc69938083',
      InvitePool: '0x7A21B36ECc87702e5cD08d4D1d58Ec8b11e7E235',
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
      rpcUrls: ['https://data-seed-prebsc-2-s1.binance.org:8545/']
    };
  }
};