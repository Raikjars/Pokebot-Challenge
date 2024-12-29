import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListComponent } from './page/pokemons-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsListRoutingModule { }
