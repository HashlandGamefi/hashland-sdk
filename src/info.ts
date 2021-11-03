import { hc } from './token/HC';
import { hnPool } from './pool/HNPool';
import { contract } from './constant';

const hcPerLevel = [0, 4, 32, 192, 1024];
const btcValuePerLevel = [100, 400, 1600, 6400, 25600];

export const info = {
  getHNPoolApr: async (hcPrice: number, btcPrice: number) => {
    const hcValuePerLevel = hcPerLevel.map(item => item * hcPrice);

    const hcPerYear = (await hc().getPoolTokenPerBlock(contract().HNPool)).mul(28800 * 365).toNumber() / 1e18;
    const hcValuePerYear = hcPerYear * hcPrice;

    const btcPerYear = (await hnPool().tokensPerBlock(1)).mul(28800 * 365).toNumber() / 1e18;
    const btcValuePerYear = btcPerYear * btcPrice;

    const hnIdsLengthPerLevel = (await hnPool().getEachLevelHnIdsLength(5)).map(item => item.toNumber());

    let stakeHcValue = 0;
    let stakeBtcValue = 0;
    for (let i = 0; i < 5; i++) {
      stakeHcValue += hnIdsLengthPerLevel[i] * hcValuePerLevel[i];
      stakeBtcValue += hnIdsLengthPerLevel[i] * btcValuePerLevel[i];
    }

    return (hcValuePerYear + btcValuePerYear) / (stakeHcValue + stakeBtcValue);
  },

  getHNPoolURoi: async (hcPrice: number, apr: number, user: string) => {
    const hcValuePerLevel = hcPerLevel.map(item => item * hcPrice);

    const userHnIdsLengthPerLevel = (await hnPool().getUserEachLevelHnIdsLength(user, 5)).map(item => item.toNumber());

    let userStakeHcValue = 0;
    let userStakeBtcValue = 0;
    for (let i = 0; i < 5; i++) {
      userStakeHcValue += userHnIdsLengthPerLevel[i] * hcValuePerLevel[i];
      userStakeBtcValue += userHnIdsLengthPerLevel[i] * btcValuePerLevel[i];
    }

    return (userStakeHcValue + userStakeBtcValue) * apr;
  },
}