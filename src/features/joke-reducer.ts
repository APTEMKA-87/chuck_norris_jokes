import {jokesAPI, jokeType} from "../api/jokes-api";
import {Dispatch} from "redux";

const initialState: jokeType[] = []

export const jokesReducer = (state: jokeType[] = initialState, action: ActionsType): jokeType[] => {
    switch (action.type) {
        case "SET-JOKE":
            return [{...action.joke}, ...state]
        default:
            return state
    }
}

// actions
export const setJokeAC = (joke: jokeType) => ({type: 'SET-JOKE', joke} as const)

// thunks
export const fetchJokeTC = () => {
    return (dispatch: ThunkDispatch) => {
        jokesAPI.getJoke()
            .then((res) => {
                dispatch(setJokeAC(res.data))
            })
            .catch(error => {
                alert('Some error');
            })
    }
}

// types
export type setJokeACType = ReturnType<typeof setJokeAC>;
type ActionsType = setJokeACType
export type ThunkDispatch = Dispatch<ActionsType>