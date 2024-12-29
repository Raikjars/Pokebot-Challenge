import { createAction, props } from '@ngrx/store';
import { ChatbotModel } from '../../core/models/chatbot.interface';

export const SendMessage = createAction(
    '[Send Message] Question added successfully',
    props<{ message: any}>()
  );

export const RecieveMessage = createAction(
    '[Send Message] Answer added successfully',
    props<{ messages: ChatbotModel[]}>()
  );
