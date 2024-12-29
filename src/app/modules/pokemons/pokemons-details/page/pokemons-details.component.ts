import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LoadPokemonDetails } from '../../../../state/actions/pokemons.actions';
import { selectLoading, selectPokemonDetails } from '../../../../state/selectors/pokemons.selector';

@Component({
  selector: 'app-pokemons-details',
  standalone: false,
  
  templateUrl: './pokemons-details.component.html',
  styleUrl: './pokemons-details.component.scss'
})
export class PokemonsDetailsComponent implements OnInit{

  pokemonID: any;
  loading$: Observable<boolean> = new Observable()
  pokemon$: Observable<any> = new Observable()
  
  constructor(
    private store: Store<any>, 
    private route: ActivatedRoute
  ){
    this.pokemonID = this.route.snapshot.paramMap.get('id'); //Obtiene el ID del Pokemon
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(LoadPokemonDetails({ id: this.pokemonID }));
  }

  ngOnInit(): void {
    this.pokemon$ = this.store.select(selectPokemonDetails);
  }

}
