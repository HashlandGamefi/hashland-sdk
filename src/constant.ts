export const token = () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      HN: '0x0000000000000000000000000000000000000001',
    }
  } else {
    return {
      HN: '0xCfd90244D4788b61d1d79A77748C74a26d8b752b',
    };
  }
};

export const contract = () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      HNPool: '0x0000000000000000000000000000000000000002',
    };
  } else {
    return {
      HNPool: '0x4a70Ba0C1309fDeF78f6adDf9785eF1D90AaD8b1',
    };
  }
};

export const network = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://bsc-dataseed.binance.org/';
  } else {
    return 'https://data-seed-prebsc-2-s1.binance.org:8545/';
  }
}