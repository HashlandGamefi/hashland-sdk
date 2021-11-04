import { hc } from './token/HC';
import { hnPool } from './pool/HNPool';
import { contract } from './constant';

const maxLevel = 5;
const usdPerLevel = [100, 400, 1600, 6400, 25600];

export const info = {
  getHNPoolApr: async (hcPrice: number, btcPrice: number) => {
    const hcPerYear = (await hc().getPoolTokenPerBlock(contract().HNPool)).mul(28800 * 365).toNumber() / 1e18;
    const hcValuePerYear = hcPerYear * hcPrice;

    const btcPerYear = (await hnPool().tokensPerBlock(1)).mul(28800 * 365).toNumber() / 1e18;
    const btcValuePerYear = btcPerYear * btcPrice;

    const hnIdsLengthPerLevel = (await hnPool().getEachLevelHnIdsLength(maxLevel)).map(item => item.toNumber());

    let stakeUsdValue = 0;
    for (let i = 0; i < maxLevel; i++) {
      stakeUsdValue += hnIdsLengthPerLevel[i] * usdPerLevel[i];
    }

    return (hcValuePerYear + btcValuePerYear) / stakeUsdValue * 100;
  },

  getHNPoolUserApr: async (user: string, hcPrice: number, btcPrice: number) => {
    const stakeHc = (await hnPool().stakes(0)).toNumber();
    const userStakeHc = (await hnPool().userStakes(user, 0)).toNumber();
    const userShareHc = userStakeHc / stakeHc;

    const stakeBtc = (await hnPool().stakes(1)).toNumber();
    const userStakeBtc = (await hnPool().userStakes(user, 1)).toNumber();
    const userShareBtc = userStakeBtc / stakeBtc;

    const hcPerYear = (await hc().getPoolTokenPerBlock(contract().HNPool)).mul(28800 * 365).toNumber() / 1e18;
    const hcValuePerYear = hcPerYear * hcPrice;
    const userHcValuePerYear = hcValuePerYear * userShareHc;

    const btcPerYear = (await hnPool().tokensPerBlock(1)).mul(28800 * 365).toNumber() / 1e18;
    const btcValuePerYear = btcPerYear * btcPrice;
    const userBtcValuePerYear = btcValuePerYear * userShareBtc;

    const userHnIdsLengthPerLevel = (await hnPool().getUserEachLevelHnIdsLength(user, maxLevel)).map(item => item.toNumber());

    let userStakeUsdValue = 0;
    for (let i = 0; i < maxLevel; i++) {
      userStakeUsdValue += userHnIdsLengthPerLevel[i] * usdPerLevel[i];
    }

    return (userHcValuePerYear + userBtcValuePerYear) / userStakeUsdValue * 100;
  },
}