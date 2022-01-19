import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { HNMarketV2__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/hashlandgamefi/hn-market-v2',
  cache: new InMemoryCache(),
})

export function hnMarketV2() {
  return HNMarketV2__factory.connect(contract().HNMarketV2, rpcProvider);
}

export const hnMarketInfoV2 = {
  getBuyInfo: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    level?: number,
    hnClass?: number,
    seller?: string,
    buyer?: string,
    series?: number,
    ultra?: boolean,
  ) => {
    const buyInfoQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $level: BigInt, $hnClass: BigInt, $seller: String, $buyer: String, $series: BigInt, $ultra: Boolean) {
        buyInfos(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
          where: {${level ? `level: $level,` : ``} ${hnClass ? `hnClass: $hnClass,` : ``} ${seller ? `seller: $seller,` : ``} ${buyer ? `buyer: $buyer,` : ``} ${series ? `series: $series,` : ``} ${ultra != null ? `ultra: $ultra,` : ``}}
        ) {
          hnId
          buyer
          seller
          price
          feeRatio
          feeAmount
          sellAmount
          isInPool
          buyTime
          ip
          series
          level
          hnClass
          spawntime
          hcHashrate
          btcHashrate
          ultra
        }
      }
    `;

    return await client.query({
      query: gql(buyInfoQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        level: level,
        hnClass: hnClass,
        seller: seller,
        buyer: buyer,
        series: series,
        ultra: ultra,
      },
    });
  },

  getSellInfo: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    level?: number,
    hnClass?: number,
    seller?: string,
    series?: number,
    ultra?: boolean,
  ) => {
    const sellInfoQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $level: BigInt, $hnClass: BigInt, $seller: String, $series: BigInt, $ultra: Boolean) {
        sellInfos(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
          where: {${level ? `level: $level,` : ``} ${hnClass ? `hnClass: $hnClass,` : ``} ${seller ? `seller: $seller,` : ``} ${series ? `series: $series,` : ``} ${ultra != null ? `ultra: $ultra,` : ``}}
        ) {
          hnId
          seller
          price
          isInPool
          sellTime
          ip
          series
          level
          hnClass
          spawntime
          hcHashrate
          btcHashrate
          ultra
        }
      }
    `;

    return await client.query({
      query: gql(sellInfoQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        level: level,
        hnClass: hnClass,
        seller: seller,
        series: series,
        ultra: ultra,
      },
    });
  },
}