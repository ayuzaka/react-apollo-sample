// eslint-disable-next-line import/no-extraneous-dependencies
import { graphql } from 'msw';

import { PokemonListQuery, PokemonListQueryVariables } from '../generated/graphql';

export const handlers = [
  graphql.query<PokemonListQuery, PokemonListQueryVariables>('PokemonList', (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: 'Query',
        pokemons: [
          {
            id: '001',
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            __typename: 'Pokemon',
          },
          {
            id: '002',
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            __typename: 'Pokemon',
          },
          {
            id: '003',
            name: 'Venusaur',
            types: ['Grass', 'Poison'],
            __typename: 'Pokemon',
          },
        ],
      })
    );
  }),
];
