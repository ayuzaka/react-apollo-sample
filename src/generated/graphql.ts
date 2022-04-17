export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Attack = {
  __typename?: 'Attack';
  damage?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Pokemon = {
  __typename?: 'Pokemon';
  attacks?: Maybe<PokemonAttack>;
  classification?: Maybe<Scalars['String']>;
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  evolutions?: Maybe<Array<Maybe<Pokemon>>>;
  fleeRate?: Maybe<Scalars['Float']>;
  height?: Maybe<PokemonDimension>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  maxCP?: Maybe<Scalars['Int']>;
  maxHP?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  resistant?: Maybe<Array<Maybe<Scalars['String']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  weaknesses?: Maybe<Array<Maybe<Scalars['String']>>>;
  weight?: Maybe<PokemonDimension>;
};

export type PokemonAttack = {
  __typename?: 'PokemonAttack';
  fast?: Maybe<Array<Maybe<Attack>>>;
  special?: Maybe<Array<Maybe<Attack>>>;
};

export type PokemonDimension = {
  __typename?: 'PokemonDimension';
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
};

export type PokemonEvolutionRequirement = {
  __typename?: 'PokemonEvolutionRequirement';
  amount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  pokemon?: Maybe<Pokemon>;
  pokemons?: Maybe<Array<Maybe<Pokemon>>>;
  query?: Maybe<Query>;
};


export type QueryPokemonArgs = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryPokemonsArgs = {
  first: Scalars['Int'];
};

export type PokemonListQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type PokemonListQuery = { __typename?: 'Query', pokemons?: Array<{ __typename?: 'Pokemon', id: string, name?: string | null, types?: Array<string | null> | null } | null> | null };

export type PokemonTypesFragment = { __typename?: 'Pokemon', types?: Array<string | null> | null };
