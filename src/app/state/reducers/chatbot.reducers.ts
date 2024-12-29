import { createReducer, on } from '@ngrx/store';
import { ChatbotState } from '../../core/models/chatbot.state';
import { RecieveMessage, SendMessage } from '../actions/chatbot.actions ';

export const initialState: ChatbotState = {
    loading: false, 
    messages: []
};

export const chatbotReducer = createReducer(
    initialState,
    on(SendMessage, (state, { message }) => {
        return {
            ...state, 
            loading: true,
            messages: [...state.messages, message]}
    }),
    on(RecieveMessage, (state, { messages }) => ({
        ...state,
        loading: false,
        messages: [...state.messages, messages], // Agrega el nuevo mensaje al array existente
      }))
  );