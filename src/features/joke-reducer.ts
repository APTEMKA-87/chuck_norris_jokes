import {jokesAPI, jokeType} from "../api/jokes-api";
import {Dispatch} from "redux";

const initialState: stateType = {
    jokes: [],
    favoriteJokes: []
}

export const jokesReducer = (state: stateType = initialState, action: ActionsType): stateType => {
    switch (action.type) {
        case "SET-JOKE": {
            return {
                ...state, jokes: [{...action.joke}]
            }
        }
        // может эту логику куда-то перенести? хз
        case "SET-LOCALSTORAGE-JOKE": {
            let newFavoriteJokes = state.favoriteJokes
            if (state.favoriteJokes.length < 10) {
                newFavoriteJokes = [state.jokes[0], ...state.favoriteJokes]
            } else {
                newFavoriteJokes = [state.jokes[0], ...state.favoriteJokes.slice(0, -1)]
            }
           localStorage.setItem("FavoriteJokes", JSON.stringify(newFavoriteJokes.map(j=>j.value)))
            return {
                ...state,
                favoriteJokes: newFavoriteJokes
            }
        }
        default:
            return state
    }
}

// actions
export const setJokeAC = (joke: jokeType) => ({type: 'SET-JOKE', joke} as const) // сюда сетаю шутку приходящую с гет запроса
export const setLocalstorageJokeAC = () => ({
    type: 'SET-LOCALSTORAGE-JOKE'
} as const)

// thunks
// получение шуток
export const fetchJokeTC = () => {
    return (dispatch: ThunkDispatch) => {
        jokesAPI.getJoke()
            .then((res) => {
                dispatch(setJokeAC(res.data)) // делаю гет запрос и сетаю результат в АС
            })
            .catch(error => {
                alert('Some error');
            })
    }
}

// types
// тип АС
export type setJokeACType = ReturnType<typeof setJokeAC>;
export type setLocalstorageJokeACType = ReturnType<typeof setLocalstorageJokeAC>;
// тип экшенов
type ActionsType = setJokeACType | setLocalstorageJokeACType
// тип санки
export type ThunkDispatch = Dispatch<ActionsType>
// тип стейта
type stateType = {
    jokes: jokeType[],
    favoriteJokes: jokeType[]
}