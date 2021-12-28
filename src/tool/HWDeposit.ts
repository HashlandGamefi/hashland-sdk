import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { HWDeposit__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/hashlandgamefi/hw-deposit',
  cache: new InMemoryCache(),
})

export function hwDeposit() {
  return HWDeposit__factory.connect(contract().HWDeposit, rpcProvider);
}

export const hwDepositInfo = {
  getUserInfo: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    user?: string,
  ) => {
    const userInfoQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $user: String) {
        userInfos(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
          where: {${user ? `user: $user,` : ``}}
        ) {
          user
          amount
          count
        }
      }
    `;

    return await client.query({
      query: gql(userInfoQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        user: user,
      },
    });
  },
}