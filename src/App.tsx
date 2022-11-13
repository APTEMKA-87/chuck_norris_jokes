import React from 'react';
import './App.module.css';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {FavoriteJokesPage} from "./pages/FavoriteJokesPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Layout} from "./components/Layout";

function App() {
    return (<>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element=<HomePage/>/>
                    <Route path='FavoriteJokes' element=<FavoriteJokesPage/>/>
                    <Route path='*' element=<NotFoundPage/>/>
                </Route>
            </Routes>
        </>
    );
}

export default App;

