import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsListRoutingModule } from './pokemons-list-routing.module';
import { PokemonsListComponent } from './page/pokemons-list.component';


@NgModule({
  declarations: [
    PokemonsListComponent
  ],
  imports: [
    CommonModule,
    PokemonsListRoutingModule
  ]
})
export class PokemonsListModule { }
