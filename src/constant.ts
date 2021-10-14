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
      HN: '0x663e882477CF31e98E099413954732F99B6AbC5f',
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
      HNBox: '0x80040406d977311C99D7Aff9752550b037205021',
      HNPool: '0x95Cb8fF48Ab5aF0a8dBA6D774fDA2E3d722aDe26',
      HNUpgrade: '0x20dB8412aC5a3013Ca77E24917E11a45857cd090',
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