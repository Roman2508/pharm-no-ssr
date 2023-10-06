import { GraphQLClient } from "graphql-request"

import { getSdk } from "./__generated__"
// import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new GraphQLClient(
  process.env.GRAPHQL_API_URL || "http://localhost:1337/graphql"
  // {
  //   headers: {
  //     Authorization:
  //       "bearer 27d13c1fdcc355bcebc788c234edbba13ec0fc4104c6218cc221ec357992a94606e1dedd3af543df4cd3d055952038c726fb6bb04a042ecba03e59df91241c62d4b2fe00a140631e68be6923ce91986fd9fbbb1a253d5d542c69422accf41abc8f61c3cf1fc9ee0f8720e4fb508bb3b50090f45bd7556d9be43e4b337fe006d6",
  //   },
  // }
)

// 572700f77eb905972e2adddf07d12cc562e320a6c1ec24941d737cf174ce5913fc0a6a041952abc042a10cb894c39ac9b078b6f86ae7878c1a4d99a1609ca5f9afe79a3eadda0043ce87dfa606c6f220e67e8311fc3d13b731c6cf6860768fe88d753d7df3c2f2ce676a0ad251701523bcf5878b55c261864529a558b553c6a8

// export const client = new ApolloClient({
//   uri: 'http://localhost:1337/graphql',
//   cache: new InMemoryCache(),
// })

export const gql = getSdk(client)
export * from "./__generated__"
