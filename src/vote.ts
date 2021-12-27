import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import snapshot from '@snapshot-labs/snapshot.js';
import { getProvider } from './utils';
import { token } from './constant';

const client = new ApolloClient({
  uri: 'https://hub.snapshot.org/graphql',
  cache: new InMemoryCache(),
})

const hub = 'https://hub.snapshot.org';
const snapshotClient = new snapshot.Client712(hub);

export const vote = {
  getSpace: async () => {
    const spaceQuery = `
      query {
        space(id: "hashland.eth") {
          admins
          members
          strategies {
            name
            params
          }
          filters{
            minScore
          }
          validation{
            name
            params
          }
        }
      }
    `;

    return await client.query({
      query: gql(spaceQuery),
    });
  },

  getProposals: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    state?: string,
    author?: string,
    author_not?: string,
  ) => {
    const proposalsQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $state: String, $author: String, $author_not: String) {
        proposals(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
          where: {space_in: ["hashland.eth"], ${state ? `state: $state,` : ``} ${author ? `author: $author,` : ``} ${author_not ? `author_not: $author_not,` : ``}}
        ) {
          id  
          ipfs  
          title  
          body  
          choices  
          start  
          end  
          snapshot  
          state  
          author  
          created  
          plugins  
          network  
          type  
          strategies {
            name    
            params  
          }  
          space {    
            id    
            name  
          }  
          scores_state  
          scores  
          scores_by_strategy  
          scores_total  
          votes
        }
      }
    `;

    return await client.query({
      query: gql(proposalsQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        state: state,
        author: author,
        author_not: author_not,
      },
    });
  },

  getVotes: async (
    first: number,
    skip: number,
    orderBy: string,
    orderDirection: string,
    proposal?: string,
  ) => {
    const votesQuery = `
      query($first: Int, $skip: Int, $orderBy: BigInt, $orderDirection: String, $proposal: String) {
        votes(
          first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection,
          where: {${proposal ? `proposal: $proposal,` : ``}}
        ) {
          id
          ipfs
          voter
          created
          choice
          vp
          vp_by_strategy
        }
      }
    `;

    return await client.query({
      query: gql(votesQuery),
      variables: {
        first: first,
        skip: skip,
        orderBy: orderBy,
        orderDirection: orderDirection,
        proposal: proposal,
      },
    });
  },

  getScores: async (voters: string[]) => {
    return await snapshot.utils.getScores(
      'hashland.eth',
      [
        {
          name: 'erc20-balance-of',
          params: {
            address: token().HC,
            symbol: 'HC',
            decimals: 18
          }
        }
      ],
      '1',
      voters,
      await getProvider().getBlockNumber(),
    );
  },

  castVote: async (account: string, proposal: string, choice: number) => {
    return await snapshotClient.vote(getProvider(), account, {
      space: 'hashland.eth',
      proposal: proposal,
      type: 'single-choice',
      choice: choice,
      metadata: JSON.stringify({})
    });
  },

  createProposal: async (account: string, title: string, body: string, choices: string[], start: number, end: number) => {
    return await snapshotClient.proposal(getProvider(), account, {
      space: 'hashland.eth',
      type: 'single-choice',
      title: title,
      body: body,
      choices: choices,
      start: start,
      end: end,
      snapshot: await getProvider().getBlockNumber(),
      network: '1',
      strategies: JSON.stringify([
        {
          name: 'erc20-balance-of',
          params: {
            address: token().HC,
            symbol: 'HC',
            decimals: 18
          }
        }
      ]),
      plugins: JSON.stringify({}),
      metadata: JSON.stringify({ app: 'snapshot.js' })
    });
  },
}