import { createAction, props } from '@ngrx/store';
import { EmployeeModel } from '../../core/models/pokemon.interface';

export const LoadPokemons = createAction(
    '[Pokemons List] Load Pokemons',
  );

export const LoadedPokemons = createAction(
    '[Pokemons List] Pokemons loaded successfully',
    props<{ pokemons: EmployeeModel[]}>()
  );

export const LoadPokemonDetails = createAction(
    '[Pokemon Details] Load Pokemon Details',
    props<{ id: string}>()
  );

export const LoadedPokemonDetails = createAction(
    '[Pokemon Details] Details loaded successfully',
    props<{ pokemonDetails: any}>()
  );
