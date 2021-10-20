export function token() {
  if (process.env.NODE_ENV === 'production') {
    return {
      HC: '0x0000000000000000000000000000000000000000',
      HN: '0x0000000000000000000000000000000000000000',
      BTC: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    }
  } else {
    return {
      HC: '0x9c41df7F2EE04342De4d1c66676E551a362B0c71',
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
      HNPool: '0x8b52E8f045A728f283C745EeBe7567740c9C821d',
      HNUpgrade: '0x27d82CdE8AF38a908aeff3D0C584209b6c23621D',
      HNMarket: '0x6d1aD8a2A42F5a35Cf88D8966105aa2D9c752f13',
      InvitePool: '0x13Bd71c9FAf1bF2AAB0080b94A83A2159D3c6647',
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