import { constants, ethers } from 'ethers';
import { hc } from './token/HC';
import { hnPool } from './pool/HNPool';
import { hnBox } from './pool/HNBox';
import { iPancakeRouter } from './tool/IPancakeRouter';
import { token, contract } from './constant';
import { rpcProvider } from './utils';

const maxLevel = 5;
const costPerLevel = [1, 4, 16, 64, 256];
const pancakeRouterAbi = [
  'function getAmountsOut(uint amountIn, address[] memory path) external view returns (uint[] memory amounts)',
  'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
];

export const info = {
  getHcPrice: async () => {
    const router = new ethers.Contract(contract().PancakeRouter, pancakeRouterAbi, rpcProvider);
    return Number((await router.getAmountsOut(constants.WeiPerEther, [token().HC, token().BUSD]))[1]) / 1e18;
  },

  getHNPoolApr: async (hcPrice: number, btcPrice: number) => {
    const cardPrice = Number(await hnBox().boxTokenPrices(1)) / 1e18;

    const hcPerYear = Number((await hc().getPoolTokenPerBlock(contract().HNPool)).mul(28800 * 365)) / 1e18;
    const hcValuePerYear = hcPerYear * hcPrice;

    const btcPerYear = Number((await hnPool().tokensPerBlock(1)).mul(28800 * 365)) / 1e18;
    const btcValuePerYear = btcPerYear * btcPrice;

    const hnIdsLengthPerLevel = (await hnPool().getEachLevelHnIdsLength(maxLevel)).map(item => Number(item));

    let stakeUsdValue = 0;
    for (let i = 0; i < maxLevel; i++) {
      stakeUsdValue += hnIdsLengthPerLevel[i] * costPerLevel[i] * cardPrice;
    }

    return (hcValuePerYear + btcValuePerYear) / stakeUsdValue * 100;
  },

  getHNPoolUserApr: async (user: string, hcPrice: number, btcPrice: number) => {
    const cardPrice = Number(await hnBox().boxTokenPrices(1)) / 1e18;

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

    const userHnIdsLengthPerLevel = (await hnPool().getUserEachLevelHnIdsLength(user, maxLevel)).map(item => Number(item));

    let userStakeUsdValue = 0;
    for (let i = 0; i < maxLevel; i++) {
      userStakeUsdValue += userHnIdsLengthPerLevel[i] * costPerLevel[i] * cardPrice;
    }

    return (userHcValuePerYear + userBtcValuePerYear) / userStakeUsdValue * 100;
  },
}