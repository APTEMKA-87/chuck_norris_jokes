import React from 'react';
import './App.module.css';
import Joke from "./components/Joke/Joke";
import {AddJokeButton} from "./components/AddJokeButton/AddJokeButton";
import {
    JokeNonStopButton
} from "./components/JokeButtonNonStop/JokeNonStopButton";
import {
    AddFavoriteJokeButton
} from "./components/AddFavoriteJokeButton/AddFavoriteJokeButton";
import style from './App.module.css'

function App() {
    return (<body>

        <header className="header">
            <div className={style.container}>
                <div className={style.header__inner}>
                    <nav className={style.menu}>
                        <ul className={style.menu__list}>
                            <li className={style.menu__item}>
                                <AddJokeButton/>
                            </li>
                            <li className={style.menu__item}>
                                <AddFavoriteJokeButton/>
                            </li>
                            <li className={style.menu__item}>
                                <JokeNonStopButton/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <section className={style.info} id="info">
            <div className={style.container}>
                <h4 className="info__item-title">
                    Random Joke
                </h4>
                <p className="info__item-text">
                    <Joke/>
                </p>
            </div>
        </section>

        </body>
    );
}

export default App;
