export function token() {
  if (process.env.NODE_ENV === 'production') {
    return {
      HC: '0x0000000000000000000000000000000000000000',
      HN: '0x0000000000000000000000000000000000000000',
      BTC: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    }
  } else {
    return {
      HC: '0x946DE4AfF280158D7337Ea9cf80Aa29841727aE5',
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
      HNUpgrade: '0xE9968A83fC4bA45C7a471780B00527d559E8cFA5',
      HNMarket: '0x6d1aD8a2A42F5a35Cf88D8966105aa2D9c752f13',
      InvitePool: '0x8499D235ad0fa1442187Bf5d3EAe2b6a23cf798F',
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