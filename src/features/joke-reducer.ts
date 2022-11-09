import {jokesAPI, jokeType} from "../api/jokes-api";
import {Dispatch} from "redux";

const initialState: jokeType[] = []

export const jokesReducer = (state: jokeType[] = initialState, action: ActionsType): jokeType[] => {
    switch (action.type) {
        case "SET-JOKE": {
            let ArrayFavoriteJokes = state
            if (ArrayFavoriteJokes.length < 10)
                return [{...action.joke}, ...state]
            else return [action.joke,...ArrayFavoriteJokes.slice(0,-1)] // пуши попы через Arr
        }
        default:
            return state
    }
}

/*const arr = ["1", "2", "3", "4"];
console.log(["0",...arr.slice(0,-1)])
console.log(arr)*/

// actions
export const setJokeAC = (joke: jokeType) => ({type: 'SET-JOKE', joke} as const) // сюда сетаю шутку приходящую с гет запроса

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
// тип экшенов
type ActionsType = setJokeACType
// тип санки
export type ThunkDispatch = Dispatch<ActionsType>