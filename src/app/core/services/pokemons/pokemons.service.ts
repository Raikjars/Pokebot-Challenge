import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

 
  constructor(private httpService: HttpService,) { }

  getPokemonsList(): Observable<any> { //obtiene la lista de tópicos
    return this.httpService
      .get(
        `/pokemon?limit=151&offset=0`,
        undefined
      )
      .pipe(
        map((res: any) => {
          return res.results;
        })
      );
  }

  getPokemon(id: number): Observable<any> { //obtiene la lista de tópicos
    return this.httpService
      .get(
        `/pokemon/${id}`,
        undefined
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  
}
