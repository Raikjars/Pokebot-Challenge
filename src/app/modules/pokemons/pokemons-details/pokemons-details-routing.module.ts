import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsDetailsComponent } from './page/pokemons-details.component';

const routes: Routes = [
  {
      path: ':id',
      component: PokemonsDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsDetailsRoutingModule { }
