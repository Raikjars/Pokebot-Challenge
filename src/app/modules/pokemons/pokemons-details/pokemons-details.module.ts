import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsDetailsRoutingModule } from './pokemons-details-routing.module';
import { PokemonsDetailsComponent } from './page/pokemons-details.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    PokemonsDetailsComponent
  ],
  imports: [
    CommonModule,
    PokemonsDetailsRoutingModule,
    ButtonModule
  ]
})
export class PokemonsDetailsModule { }
