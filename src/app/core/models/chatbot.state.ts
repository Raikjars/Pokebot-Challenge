import { ChatbotModel } from "./chatbot.interface";

export interface ChatbotState{
    loading: boolean;
    messages: any[];
}