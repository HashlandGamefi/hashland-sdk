export function token(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
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

export function contract(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      HNBox: '0x60c5715248c4bB3035F086A09E2BB5A7d0155751',
      HNBlindBox: '0xc20187179817ebbD0f1065AF6cF2c5E859583a46',
      HNBlindBoxS2: '0x2CA1B76C33572B1AAFB090f35BdF446B26AC95Fc',
      HNUpgrade: '0xd54A485b8149ba70B48cE013479E02F05D38B428',
      HNUpgradeV2: '0x878cb4A8a473477E742404fa2e9Edf805E8Ee64B',
      HNMarket: '0x3110f63D4f20F94DBd3543B26eE355021Af20739',
      HNMarketV2: '0x83291fB61176fDa3200cc0d4ae50cb4f74d3f9ca',
      HNPool: '0x28b45001dB087afcbeC20f5dD6C041Cf46b40AC3',
      HCLPPool: '0x0AE7A7330f19c2A1dEaBbACce8dE6bD6c22De313',
      InvitePool: '0x9FA50C14CafF0925069e64Fb7915AAE44e352332',
      HWDeposit: '0xe272cA8C91ac42FF20fA0024842707BC3651f54D',
      HWPvEPool: '0x0807061FcFd626a63404bF5f3852efA03F9E175E',
      HWPvPPool: '0x3b633B4E182f8b0C23a630E8aa729422E385e44C',
      HWWEPool: '0xBccC75d00E0Dc753f6276B29a37eEa38Dc702B45',
      PancakeRouter: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    };
  } else {
    return {
      HNBox: '0x84fB1b4FC574F5dC5161e0CecaD412501A7Bb968',
      HNBlindBox: '0xd53117c3BAEA8DEB52dF855062297ff52Deb0d2f',
      HNBlindBoxS2: '0xF03a4F4AcD6810EbF67F6e9ed01f83Ef2f8ddC7F',
      HNUpgrade: '0x25ec013DB55B780A4d41e987aBB869320bb72E66',
      HNUpgradeV2: '0x271EB76Bb2690c2f17af48D123c52db9740C2f38',
      HNMarket: '0xcc5F082C29da48c658E4D9E0CB9dA1a55f498b04',
      HNMarketV2: '0x26B05Eca33454E336DA9e9787C9d5272c55f4a98',
      HNPool: '0x4D9a65d55029aE12ef0A3CAfb04CB94af60daa17',
      HCLPPool: '0xa63Aa895E4104ef6834991922391F54986cd0A50',
      InvitePool: '0xEcB74A458A7a6634471a965F4f9323A2572288F7',
      HWDeposit: '0x18fdd9d1c4a5B32987B8ED6b5e121Af27E256468',
      HWPvEPool: '0x5bDc0fEcdfd1EBcd2DDAd57205795ED263A8e365',
      HWPvPPool: '0xf1B6b6fa6b7887f6449c7A2ED575B8E60E67f431',
      HWWEPool: '0x303279fbBA225471A6C2A30fFcF1feC5D993ae16',
      PancakeRouter: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3',
    };
  }
};

export function network(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
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