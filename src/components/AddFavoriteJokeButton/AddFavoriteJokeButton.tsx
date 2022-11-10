import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../store";
import {AnyAction} from "redux";
import style from './AddFavoriteJokeButton.module.css'
import {setLocalstorageJokeAC} from "../../features/joke-reducer";

export const AddFavoriteJokeButton = () => {

    const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, AnyAction>>()
    const addLocalstorageHandler = useCallback(() => {
        dispatch(setLocalstorageJokeAC())
    }, [dispatch])

    /*  const clearClickHandler = () => {
          localStorage.clear()
      }*/

    return (
        <button className={style.form__btn}
                onClick={addLocalstorageHandler}>
            Add to favorite jokes
        </button>
    );
};
// вынести отдельной компонентой зачистку локалстораджа
{/*<button className={style.form__btn} onClick={clearClickHandler}>Clear joke
                in localstorage
            </button>*/
}