import { createReducer, on } from '@ngrx/store';
import { LoadedPokemons, LoadedPokemonDetails, LoadPokemons } from '../actions/pokemons.actions';
import { PokemonsState } from '../../core/models/pokemon.state';

export const initialState: PokemonsState = {loading: false, pokemons: [], pokemonDetails: {}};

export const pokemonsReducer = createReducer(
    initialState,
    on(LoadPokemons, state => {
        return {...state, loading: true}
    }),
    on(LoadedPokemons, (state, {pokemons} )=> {
        return {...state, loading: false, pokemons}
    }),
    on(LoadedPokemonDetails, (state, {pokemonDetails} )=> {
        return {...state, loading: false, pokemonDetails}
    })
  );