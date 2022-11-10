import {jokesAPI, jokeType} from "../api/jokes-api";
import {Dispatch} from "redux";

const initialState: { jokes: jokeType[], favJokes: jokeType[] } = {
    jokes: [],
    favJokes: []
}

export const jokesReducer = (state: { jokes: jokeType[], favJokes: jokeType[] } = initialState, action: ActionsType): { jokes: jokeType[], favJokes: jokeType[] } => {
    switch (action.type) {
        case "SET-JOKE": {
            let ArrayFavoriteJokes = state.jokes
            if (ArrayFavoriteJokes.length < 10)
                return {
                    ...state, jokes: [ {...action.joke},...state.jokes
                    ]
                }
            else return {
                ...state,
                jokes: [action.joke, ...ArrayFavoriteJokes.slice(0, -1)
                ]
            } // удаляю последний элемент массива и добавляю новый в начало
        }
        case "SET-LOCALSTORAGE-JOKE": {
            let newFavJokes = state.favJokes
            if(state.favJokes.length<10){
                newFavJokes = [state.jokes[0], ...state.favJokes]

            }else{
                newFavJokes = [state.jokes[0], ...state.favJokes.slice(0,-1)]
            }
            console.log(newFavJokes)
            localStorage.setItem("jokeArray", JSON.stringify(newFavJokes))
            return {
                ...state,
                favJokes: newFavJokes
            }
            //jokes.map(j => j.value)[0]


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
export const setLocalstorageJokeAC = () => ({
    type: 'SET-LOCALSTORAGE-JOKE'
} as const) // сюда сетаю шутку приходящую с гет запроса

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