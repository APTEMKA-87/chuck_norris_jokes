import React, {useCallback, useState} from 'react';

export const FavoriteJoke = () => {
// ToDo разобраться, что я тут написал
    //хочу при нажатии на кнопку брать значения из локалстораджа и отрисовывать
    // не происходит перересовки чтобы отрисовать изменения
    // написать экш какой-то или через как-то через useCallback делать

    let favoriteJokesFromLocalstorage = localStorage.getItem('app-state')

    let [press, setPress] = useState(false)
    let [favoriteJokes, setFavoriteJokes] = useState(favoriteJokesFromLocalstorage)

    const handleClick = () => {
        if (press) {
            setFavoriteJokes(favoriteJokes)
        }
        setPress(!press)
    }

    const foo = useCallback(()=>{
        handleClick()
    },[press])

    // const jokes = useSelector<AppRootStateType, Array<jokeType>>(state => state.jokes.jokes)


    console.log(favoriteJokes)

    return (
        <button onClick={foo}>
            {favoriteJokes}XXX
            {/*{jokes.map(j => <li>{j.value}</li>)}*/}
        </button>


    );
};

