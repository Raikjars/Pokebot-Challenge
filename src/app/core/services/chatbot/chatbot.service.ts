import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { map, Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  prompt: any = {
    role: 'developer', 
    content: 'Eres un asistente especializado en la saga Pokemon, Solo puedes hablar sobre los 150 Pokemons de la primera generación tales como sus caracteristicas principales y nombres. Por ningun motivo tienes permitido hablar de un tema diferente a este. Adicionalmente, cada vez que un usuario muestre la intencion de conocer mas sobre los pokemons que estes hablando debes agregar al final de la respuesta 2 saltos de linea y cada pokemon nombrado en la ultima respuesta que hayas realizado debe ser agregado a una lista con su nombre y su numero usando la siguiente estructura como ejemplo: [{"name": "pikachu", "id": 25},{"name": "charmender", "id": 4},{"name": "raichu", "id": 26}], Siempre que te hagan una nueva pregunta la lista se vacia y debe ser llenada con los nombres de los pokemons sobre los que estes respondiendo'
  }

  constructor(
    private httpService: HttpService
  ) { }
  
  //peticion que comparte la pregunta y respuesta de un chat
  sendMessage(message: any): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.api_key}`
    };

    let messageList = []
    if([message.message].length === 1){
      messageList.push(this.prompt);
      messageList.push(message.message)
    }else{
      messageList.push(message.message)
    }

    let configuration = {
      messages: messageList,
      model: "gpt-3.5-turbo",
      temperature: 0.7
    }
    
    return this.httpService
      .post(
        `/completions`,
        configuration,
        headers
      )
      .pipe(
        map((response: any) => {

          let pokemonList = [];
          let match = response.choices[0].message.content.match(/\[.*?\]/);

          if (match) {//Valida si hay una lista de nombres de Pokemons para agregarla a la variable
            pokemonList = JSON.parse(match);
          } 
          
          let message = {
            role: 'assistant', 
            content: response.choices[0].message.content.replace(/\[.*?\]/g, ''),
            interaction_date: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS', "en"),
            pokemonList: pokemonList
          }
          
          return message;
        })
      );
  }

}
