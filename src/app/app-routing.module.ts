import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon-list',
    pathMatch: 'full'
  },
  {
    path: 'pokemon-list',
    loadChildren: () => import('./modules/pokemons/pokemons-list/pokemons-list.module').then( m => m.PokemonsListModule)
  },
  {
    path: 'pokemon-details',
    loadChildren: () => import('./modules/pokemons/pokemons-details/pokemons-details.module').then( m => m.PokemonsDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
