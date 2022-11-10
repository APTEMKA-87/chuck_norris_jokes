import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../store";
import {AnyAction} from "redux";
import {fetchJokeTC} from "../../features/joke-reducer";
import style from './JokeNonStopButton.module.css'

export const JokeNonStopButton = () => {

    // Стейт для нажатия кнопки
    let [press, setPress] = useState(false)
    // Стейт для передачи id в clearInterval
    let [timerId, setTimerId] = useState<NodeJS.Timer>() // что за типизация и как можно не задавать initialState
    console.log(press) //ToDo избавиться от двойной перересовки
    // скопипастил типизацию, без нее не работал dispatch
    const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, AnyAction>>()
    // колбек для смены значения тру на фолс в кнопке и
    const handleClick = () => {
        if (press) {
            clearInterval(timerId)
        }
        setPress(!press)
    }
    // получение шуток при нажатии на кнопку с интервалом 1 сек
    useEffect(() => {
        if (press) {
            let timerId = setInterval(() => {
                dispatch(fetchJokeTC())
            }, 1000)
            setTimerId(timerId)
        }
    }, [press])
    return (
        <button className={style.form__btn} onClick={handleClick}>
            Jokes non-stop
        </button>
    );
};

