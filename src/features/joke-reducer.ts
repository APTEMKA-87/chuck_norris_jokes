import {jokeType} from "../api/jokes-api";

const initialState: jokeType[] = []

export const jokesReducer = (state: jokeType[], action: ActionsType): jokeType[] => {
    switch (action.type) {
        case "ADD-JOKE":
            return [{...action.joke}, ...state] // почему мы здесь вторым параметром снова перезаписываем стэйт? типа создаем массив в который первым параметром ложим объект с шуткой из экшена, и перезаписываем массив?
        default:
            return state
    }
}

// actions
export const addJokeAC = (joke: jokeType) => ({type: 'ADD-JOKE', joke} as const)

// types
export type addJokeACType = ReturnType<typeof addJokeAC>;
type ActionsType = addJokeACType