import { hc } from './token/HC';
import { hnPool } from './pool/HNPool';
import { contract } from './constant';

const maxLevel = 5;
const hcPerLevel = [0, 4, 32, 192, 1024];
const btcValuePerLevel = [100, 400, 1600, 6400, 25600];

export const info = {
  getHNPoolApr: async (hcPrice: number, btcPrice: number) => {
    const hcPerYear = (await hc().getPoolTokenPerBlock(contract().HNPool)).mul(28800 * 365).toNumber() / 1e18;
    const hcValuePerYear = hcPerYear * hcPrice;

    const btcPerYear = (await hnPool().tokensPerBlock(1)).mul(28800 * 365).toNumber() / 1e18;
    const btcValuePerYear = btcPerYear * btcPrice;

    const hcValuePerLevel = hcPerLevel.map(item => item * hcPrice);
    const hnIdsLengthPerLevel = (await hnPool().getEachLevelHnIdsLength(maxLevel)).map(item => item.toNumber());

    let stakeHcValue = 0;
    let stakeBtcValue = 0;
    for (let i = 0; i < maxLevel; i++) {
      stakeHcValue += hnIdsLengthPerLevel[i] * hcValuePerLevel[i];
      stakeBtcValue += hnIdsLengthPerLevel[i] * btcValuePerLevel[i];
    }

    return (hcValuePerYear + btcValuePerYear) / (stakeHcValue + stakeBtcValue) * 100;
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

    const hcValuePerLevel = hcPerLevel.map(item => item * hcPrice);
    const userHnIdsLengthPerLevel = (await hnPool().getUserEachLevelHnIdsLength(user, maxLevel)).map(item => item.toNumber());

    let userStakeHcValue = 0;
    let userStakeBtcValue = 0;
    for (let i = 0; i < maxLevel; i++) {
      userStakeHcValue += userHnIdsLengthPerLevel[i] * hcValuePerLevel[i];
      userStakeBtcValue += userHnIdsLengthPerLevel[i] * btcValuePerLevel[i];
    }

    return (userHcValuePerYear + userBtcValuePerYear) / (userStakeHcValue + userStakeBtcValue) * 100;
  },
}