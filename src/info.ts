import { hc } from './token/HC';
import { hnPool } from './pool/HNPool';
import { hclpPool } from './pool/HCLPPool';
import { hnBox } from './pool/HNBox';
import { contract } from './constant';

const maxLevel = 5;
const cardCostPerLevel = [1, 4, 16, 64, 256];
const hcCostPerLevel = [0, 4, 32, 192, 1024];

export const info = {
  getHNPoolApr: async (hcPrice: number, btcPrice: number) => {
    const cardPrice = Number(await hnBox().boxTokenPrices(1)) / 1e18;

    const hcPerYear = Number((await hc().getPoolTokenPerBlock(contract().HNPool)).mul(28800 * 365)) / 1e18;
    const hcValuePerYear = hcPerYear * hcPrice;

    const btcPerYear = Number((await hnPool().tokensPerBlock(1)).mul(28800 * 365)) / 1e18;
    const btcValuePerYear = btcPerYear * btcPrice;

    const hnIdsLengthPerLevel = (await hnPool().getEachLevelHnIdsLength(maxLevel)).map(item => Number(item));

    let stakeUsdValue = 0;
    for (let i = 0; i < maxLevel; i++) {
      stakeUsdValue += hnIdsLengthPerLevel[i] * (cardCostPerLevel[i] * cardPrice + hcCostPerLevel[i] * hcPrice);
    }

    return (hcValuePerYear + btcValuePerYear) / stakeUsdValue * 100;
  },

  getHNPoolRoi: async (user: string, hcPrice: number, btcPrice: number) => {
    const stakeHc = Number((await hnPool().stakes(0)));
    const userStakeHc = Number((await hnPool().userStakes(user, 0)));
    const userShareHc = userStakeHc / stakeHc;

    const stakeBtc = Number((await hnPool().stakes(1)));
    const userStakeBtc = Number((await hnPool().userStakes(user, 1)));
    const userShareBtc = userStakeBtc / stakeBtc;

    const hcPerYear = Number((await hc().getPoolTokenPerBlock(contract().HNPool)).mul(28800 * 365)) / 1e18;
    const hcValuePerYear = hcPerYear * hcPrice;
    const userHcValuePerYear = hcValuePerYear * userShareHc;

    const btcPerYear = Number((await hnPool().tokensPerBlock(1)).mul(28800 * 365)) / 1e18;
    const btcValuePerYear = btcPerYear * btcPrice;
    const userBtcValuePerYear = btcValuePerYear * userShareBtc;

    return userHcValuePerYear + userBtcValuePerYear;
  },

  getHCLPPoolApr: async (hcPrice: number) => {
    const hcPerYear = Number((await hc().getPoolTokenPerBlock(contract().HCLPPool)).mul(28800 * 365)) / 1e18;
    const hcValuePerYear = hcPerYear * hcPrice;

    const stakeHclp = Number((await hclpPool().stake())) / 1e18;
    const hclpPrice = 2 * Math.sqrt(hcPrice);
    const stakeUsdValue = stakeHclp * hclpPrice;

    return hcValuePerYear / stakeUsdValue * 100;
  },

  getHCLPPoolRoi: async (user: string, hcPrice: number) => {
    const stakeHclp = Number((await hclpPool().stake()));
    const userStakeHclp = Number((await hclpPool().userStake(user)));
    const userShareHclp = userStakeHclp / stakeHclp;

    const hcPerYear = Number((await hc().getPoolTokenPerBlock(contract().HCLPPool)).mul(28800 * 365)) / 1e18;
    const hcValuePerYear = hcPerYear * hcPrice;
    const userHcValuePerYear = hcValuePerYear * userShareHclp;

    return userHcValuePerYear;
  },
}