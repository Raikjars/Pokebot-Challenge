import { EmployeeModel } from "./pokemon.interface";

export interface PokemonsState{
    loading: boolean;
    pokemons: ReadonlyArray<EmployeeModel>;
    pokemonDetails: any;
}