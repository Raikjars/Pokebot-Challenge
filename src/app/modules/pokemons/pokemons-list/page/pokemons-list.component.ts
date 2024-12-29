import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadPokemons } from '../../../../state/actions/pokemons.actions'; 
import { Observable } from 'rxjs';
import { selectPokemonsList, selectLoading } from '../../../../state/selectors/pokemons.selector';

@Component({
  selector: 'app-pokemons-list',
  standalone: false,
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.scss'
})
export class PokemonsListComponent implements OnInit {

  loading$: Observable<boolean> = new Observable()
  pokemons$: Observable<any> = new Observable()
  
  constructor(
    private store: Store<any>
  ){
    this.store.dispatch(LoadPokemons());
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.pokemons$ = this.store.select(selectPokemonsList);
  }

}
