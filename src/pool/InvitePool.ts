import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { InvitePool__factory } from 'hashland-core/typechain-types'
import { rpcProvider } from '../utils';
import { contract } from '../constant';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/hashlandgamefi/invite-pool',
  cache: new InMemoryCache(),
})

export function invitePool() {
  return InvitePool__factory.connect(contract().InvitePool, rpcProvider);
}

export const invitePoolInfo = {
  getInviterInfo: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    inviter?: string,
  ) => {
    const inviterInfoQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $inviter: String) {
        inviterInfos(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
          where: {${inviter ? `inviter: $inviter,` : ``}}
        ) {
          inviter
          harvestedHC
          stakedHC
          usersLength
        }
      }
    `;

    return await client.query({
      query: gql(inviterInfoQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        inviter: inviter,
      },
    });
  },
}