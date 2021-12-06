import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { HNMarket__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/hashlandgamefi/hn-market',
  cache: new InMemoryCache(),
})

export function hnMarket() {
  return HNMarket__factory.connect(contract().HNMarket, rpcProvider);
}

export const hnMarketInfo = {
  getSellInfo: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    level?: number,
    hnClass?: number,
    seller?: string,
  ) => {
    const sellInfoQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $level: BigInt, $hnClass: BigInt, $seller: String) {
        sellInfos(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
          where: {${level ? `level: $level,` : ``} ${hnClass ? `hnClass: $hnClass,` : ``} ${seller ? `seller: $seller,` : ``}}
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
      },
    });
  },
}