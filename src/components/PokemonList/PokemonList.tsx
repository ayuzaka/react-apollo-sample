import { useQuery, gql } from '@apollo/client';
import type { FC } from 'react';
import { PokemonTypes, POKEMON_TYPES_FRAGMENT } from '../PokemonType/PokemonType';
import type { PokemonListQuery, PokemonListQueryVariables } from '../../generated/graphql';

const POKEMON_LIST_QUERY = gql`
  ${POKEMON_TYPES_FRAGMENT}
  query PokemonList($first: Int!) {
    pokemons(first: $first) {
      id
      name
      ...PokemonTypes
    }
  }
`;

export const PokemonList: FC = () => {
  const { loading, error, data } = useQuery<PokemonListQuery, PokemonListQueryVariables>(POKEMON_LIST_QUERY, {
    variables: { first: 3 },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :( </p>;
  }

  if (!data?.pokemons) {
    return <p>data is empty</p>;
  }

  return (
    <div>
      {data.pokemons.map(
        (pokemon) =>
          pokemon !== null && (
            <div key={pokemon.id}>
              <p>{pokemon.name}</p>
              <PokemonTypes pokemon={pokemon} />
            </div>
          )
      )}
    </div>
  );
};
