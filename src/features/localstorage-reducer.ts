/*
const initialState: string[] = []

export const localstorageReducer = (state: string[] = initialState, action: ActionsType): string[] => {
    switch (action.type) {
        case "ADD-LOCALSTORAGE-JOKE": // получаю шутку и сетаю ее в массив
            return [{...action.value}, ...state] // хочу брать шутку и сетать ее в начало массива и перезаписываю массив
        case "SET-VALUE-LOCALSTORAGE-JOKE":
            return [{...state, value: action.value}]
        default:
            return state
    }
}

// actions
export const addLocalstorageJokeAC = (value: string) => ({
    type: 'ADD-LOCALSTORAGE-JOKE',
    value
} as const)
export const setValueLocalstorageJokeAC = (value: string) => ({
    type: 'SET-VALUE-LOCALSTORAGE-JOKE',
    value
} as const)
// types
// тип АС
export type addLocalstorageJokeACType = ReturnType<typeof addLocalstorageJokeAC>;
export type setValueLocalstorageJokeACType = ReturnType<typeof setValueLocalstorageJokeAC>;
// тип экшенов
type ActionsType = addLocalstorageJokeACType | setValueLocalstorageJokeACType*/
export {}