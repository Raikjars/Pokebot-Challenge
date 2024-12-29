import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { PokemonsState } from '../../core/models/pokemon.state';

export const selectPokemonsFeature = (state: AppState) => state.pokemons;

export const selectPokemonsList = createSelector(
    selectPokemonsFeature,
  (state: PokemonsState) => state.pokemons
);

export const selectPokemonDetails = createSelector(
  selectPokemonsFeature,
  (state: PokemonsState) => state.pokemonDetails
);

export const selectLoading = createSelector(
  selectPokemonsFeature,
(state: PokemonsState) => state.loading
);