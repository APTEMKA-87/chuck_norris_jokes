import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore
} from "redux";
import thunkMiddleware from "redux-thunk";
import {jokesReducer} from "./features/joke-reducer";
import {loadState, saveState} from "./utils/localstorage-utils";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    jokes: jokesReducer,
    // localstorageJokes: localstorageReducer
})

// непосредственно создаём store
export const store = createStore(rootReducer, loadState(), applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

//по Дену Абрамову штука для подхватывания значения стейта в localStorage. Валера: урок 7 про localStorage
store.subscribe(() => {
    saveState({
        favJokes: store.getState().jokes.favoriteJokes.map(joke => joke.value), // Валера достает из редюсера данные
    })
})

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;