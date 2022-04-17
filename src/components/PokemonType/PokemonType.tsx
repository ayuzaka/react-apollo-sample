import type { FC } from 'react';
import { gql } from '@apollo/client';
import type { PokemonTypesFragment } from '../../generated/graphql';

export const POKEMON_TYPES_FRAGMENT = gql`
  fragment PokemonTypes on Pokemon {
    types
  }
`;

type Props = {
  pokemon: PokemonTypesFragment;
};

export const PokemonTypes: FC<Props> = ({ pokemon }) => {
  return <div>{pokemon.types?.toString()}</div>;
};
