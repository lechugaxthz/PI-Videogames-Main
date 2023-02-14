/* by React */
import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
/* by Local components */
import BoxCards from "./cardsGames/boxCards";

import './homeAllGames.css'

/* actions */
import {
    GetAllVGames,
    GetAllGamesGenres,
    /* GetById,
     SearchGames,
     PostNewGame,
     toFilter */
} from "../redux/action/actions.js";
import NavBar from "./inNav/nav";


export default function HomeAllGames() {
    /* Dispatch */
    const dispatch = useDispatch();
    /* aplicar el estado de redux */
    useLayoutEffect(() => {
        dispatch(GetAllVGames());
        dispatch(GetAllGamesGenres());
    }, [])
    /* traer los generos, juegos, filtrados y demas del Store */
    /* const AllGenresGames = useSelector((state) => state.genres);
    const AboutDetailGame = useSelector((state) => state.detailGames); */


    return (
        <div className="homeGames">
            <NavBar/>
            <br/>
            <h1>los juegos:</h1>
            <BoxCards />

        </div>
    )

}