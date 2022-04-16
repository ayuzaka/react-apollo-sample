import type { FC, ReactChild } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

type Props = {
  children: ReactChild;
};

const client = new ApolloClient({
  uri: 'https://api.example.com',
  cache: new InMemoryCache(),
});

export const ApolloContext: FC<Props> = ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>;
