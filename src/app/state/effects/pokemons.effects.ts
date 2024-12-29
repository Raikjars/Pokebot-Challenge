import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { PokemonsService } from '../../core/services/pokemons/pokemons.service';

@Injectable()
export class PokemonsEffects {
  private actions$ = inject(Actions);
  private pokemonsService = inject(PokemonsService);

  loadPokemons$ = createEffect(() => {
    return this.actions$.pipe(
        ofType('[Pokemons List] Load Pokemons'),
        exhaustMap(() => this.pokemonsService.getPokemonsList()
          .pipe(
            map(pokemons => ({ type: '[Pokemons List] Pokemons loaded successfully', pokemons })),
            catchError(() => EMPTY)
          ))
    );
  });

  LoadPokemonDetails$ = createEffect(() => {
    return this.actions$.pipe(
        ofType('[Pokemon Details] Load Pokemon Details'),
        exhaustMap(({ id }) => this.pokemonsService.getPokemon(id)
          .pipe(
            map(pokemonDetails => ({ type: '[Pokemon Details] Details loaded successfully', pokemonDetails })),
            catchError(() => EMPTY)
          ))
    );
  });

}