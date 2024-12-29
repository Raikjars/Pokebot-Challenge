import { ActionReducerMap } from "@ngrx/store";
import { PokemonsState } from "../core/models/pokemon.state";
import { pokemonsReducer } from "./reducers/pokemons.reducers";
import { ChatbotState } from "../core/models/chatbot.state";
import { chatbotReducer } from "./reducers/chatbot.reducers";

export interface AppState{
    pokemons: PokemonsState,
    chatbot: ChatbotState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    pokemons: pokemonsReducer,
    chatbot: chatbotReducer
}