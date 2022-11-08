import {jokesAPI, jokeType} from "../api/jokes-api";
import {Dispatch} from "redux";

const initialState: jokeType[] = []

export const jokesReducer = (state: jokeType[] = initialState, action: ActionsType): jokeType[] => {
    switch (action.type) {
        case "SET-JOKE": // получаю шутку и сетаю ее в массив
            return [{...action.joke},...state] // хочу брать шутку и сетать ее в начало массива и перезаписываю массив
               default:
            return state
    }
}

//ToDo создать кейс где мы будем сетать велью в массив и диспатчить в санке

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