import React from 'react';
import './App.module.css';
import {Link, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {FavoriteJokesPage} from "./pages/FavoriteJokesPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {AppBar, Toolbar, Typography} from "@mui/material";

function App() {
    return (<>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Chuck Norris`s Jokes
                    </Typography>
                    <Link to='/'>Home</Link>
                    <Link to='/FavoriteJokes'>FavoriteJokesPage</Link>
                </Toolbar>
            <Routes>
                <Route path='/' element=<HomePage/>/>
                <Route path='/FavoriteJokes' element=<FavoriteJokesPage/>/>
                <Route path='*' element=<NotFoundPage/>/>
            </Routes>
        </>
    );
}

export default App;

