import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ChatbotService } from '../../core/services/chatbot/chatbot.service';

@Injectable()
export class ChatbotEffects {
  private actions$ = inject(Actions);
  private chatbotService = inject(ChatbotService);

  loadPokemons$ = createEffect(() => {
    return this.actions$.pipe(
        ofType('[Send Message] Question added successfully'),
        exhaustMap((message) => this.chatbotService.sendMessage(message)
          .pipe(
            map(messages => ({ type: '[Send Message] Answer added successfully', messages })),
            catchError(() => EMPTY)
          ))
    );
  });

}