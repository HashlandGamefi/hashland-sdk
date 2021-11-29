export function token() {
  if (process.env.NODE_ENV === 'production') {
    return {
      HC: '0xA6e78aD3c9B4a79A01366D01ec4016EB3075d7A0',
      HN: '0xEEa8bD31DA9A2169C38968958B6DF216381B0f08',
      HCLP: '0xd847668b7fa04c96558f841Ad94492d6B2245f8E',
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
      HNBox: '0x60c5715248c4bB3035F086A09E2BB5A7d0155751',
      HNBlindBox: '0x00',
      HNUpgrade: '0xd54A485b8149ba70B48cE013479E02F05D38B428',
      HNMarket: '0x3110f63D4f20F94DBd3543B26eE355021Af20739',
      HNPool: '0x28b45001dB087afcbeC20f5dD6C041Cf46b40AC3',
      HCLPPool: '0x0AE7A7330f19c2A1dEaBbACce8dE6bD6c22De313',
      InvitePool: '0x32fed795451F94bfFA8dB54a346F4Ec1EE0dF83E',
      PancakeRouter: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    };
  } else {
    return {
      HNBox: '0x84fB1b4FC574F5dC5161e0CecaD412501A7Bb968',
      HNBlindBox: '0xB67B868A35e085417C8FE506B78FA39E484ef95f',
      HNUpgrade: '0x25ec013DB55B780A4d41e987aBB869320bb72E66',
      HNMarket: '0xcc5F082C29da48c658E4D9E0CB9dA1a55f498b04',
      HNPool: '0x4D9a65d55029aE12ef0A3CAfb04CB94af60daa17',
      HCLPPool: '0xa63Aa895E4104ef6834991922391F54986cd0A50',
      InvitePool: '0xAfbFc2b71c2b93D6C56DEd055Ea81e3187922E1D',
      PancakeRouter: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3',
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
      rpcUrls: ['https://data-seed-prebsc-1-s3.binance.org:8545/']
    };
  }
};