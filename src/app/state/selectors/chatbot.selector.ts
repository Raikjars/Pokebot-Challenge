import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ChatbotState } from '../../core/models/chatbot.state';

export const selectMessagesFeature = (state: AppState) => state.chatbot;

export const selectAllMessages = createSelector(
  selectMessagesFeature,
  (state: ChatbotState) => state.messages
);

export const selectchatbotLoading = createSelector(
  selectMessagesFeature,
  (state: ChatbotState) => state.loading
);