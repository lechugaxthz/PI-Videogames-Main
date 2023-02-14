import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterGamesClone, ResetGames, ResetGamesFilter, searchGames } from "../../redux/action/actions";
import { Link } from "react-router-dom";
import './cssInNav/nav.css'

const NavBar = () => {

    const dispatch = useDispatch()
    const cloneGames = useSelector(state => state.clone)
    const filteredGamesList = useSelector(state => state.filteredGames)
    const SearchedGamesList = useSelector(state => state.searchedGames)
    const genresGamesList = useSelector(state => state.genres)
    /* Search */
    const [searchGameName, setSearchGameName] = useState('')
    const getName = (event) => {
        console.log(event.target.value);
        setSearchGameName(event.target.value)
    }
    /* FilterView and reset */
    const [viewFilter, setViewFilter] = useState(false)
    /* Filter by Genre */
    const [selectedOption, setSelectedOption] = useState("");
    console.log('option ======> ', selectedOption);

    const HC_Option = (event) => {
        setSelectedOption(event.target.value);
    };

    /* Filter */
    const [A_Z, setA_Z] = useState(false)
    console.log('true or false =====> ', A_Z);
    const [Z_A, setZ_A] = useState(false)
    const [RatingUp, setRatingUp] = useState(false)
    const [RatingDown, setRatingDown] = useState(false)
    const [onLyDB, setOnlyDB] = useState(false)
    const [onLyAPI, setOnlyAPI] = useState(false)


    let HC_A_Z = () => {
        if (A_Z) {
            setA_Z(!A_Z)
        } else {
            setA_Z(!A_Z)
            setZ_A(false)
            setRatingUp(false)
            setRatingDown(false)
        }
    }
    let HC_Z_A = () => {
        if (Z_A) {
            setZ_A(!Z_A)
        } else {
            setZ_A(!Z_A)
            setA_Z(false)
            setRatingUp(false)
            setRatingDown(false)
        }
    }
    let HC_RatingUp = () => {
        if (RatingUp) {
            setRatingUp(!RatingUp)
        } else {
            setRatingUp(!RatingUp)
            setA_Z(false)
            setZ_A(false)
            setRatingDown(false)
        }
    }
    let HC_RatingDown = () => {
        if (RatingDown) {
            setRatingDown(!RatingDown)
        } else {
            setRatingDown(!RatingDown)
            setA_Z(false)
            setZ_A(false)
            setRatingUp(false)
        }
    }
    let HC_OnlyDB = () => {
        if (onLyDB) {
            setOnlyDB(!onLyDB)
        } else {
            if (onLyAPI) {
                setOnlyAPI(!onLyAPI)
                setOnlyDB(!onLyDB)
            }
            setOnlyDB(!onLyDB)
        }
    }
    let HC_OnlyAPI = () => {
        if (onLyAPI) {
            setOnlyAPI(!onLyAPI)
        } else {
            if (onLyDB) {
                setOnlyDB(!onLyDB)
                setOnlyAPI(!onLyAPI)
            }
            setOnlyAPI(!onLyAPI)
        }
    }



    let toOrder = [...cloneGames]
    let filteredDB = cloneGames.filter(game => game.createdInDb === true)
    let filteredAPI = cloneGames.filter(game => game.createdInDb !== true)
    /*
        toOrder = [...SearchedGamesList]
        filteredDB = SearchedGamesList.filter(game => game.createdInDb === true)
        filteredAPI = SearchedGamesList.filter(game => game.createdInDb !== true)
    */

    console.log('Of DATA BASE =====> ', filteredDB);

    let ordenado

    const toViewInHome = (event) => {
        event.preventDefault()
        console.log('toOrder in search =======> ', toOrder);
        if (!onLyAPI && !onLyDB) {
            console.log('se llego');
            ordenado = toOrder
            if (A_Z) ordenado = toOrder.sort(function (a, z) { return a.name.localeCompare(z.name) })
            if (Z_A) ordenado = toOrder.sort(function (a, z) { return z.name.localeCompare(a.name) })
            if (RatingUp) ordenado = toOrder.sort(function (low, max) { return low.rating - max.rating })
            if (RatingDown) ordenado = toOrder.sort(function (low, max) { return max.rating - low.rating })

            if (selectedOption !== '') {
                ordenado = ordenado.filter(game => game.genres.find(gen => gen.name === selectedOption))
                return dispatch(FilterGamesClone(ordenado))
            } else {
                return dispatch(FilterGamesClone(ordenado))
            }
        }

        if (onLyAPI) {
            ordenado = filteredAPI
            if (A_Z) ordenado = filteredAPI.sort(function (a, z) { return a.name.localeCompare(z.name) })
            if (Z_A) ordenado = filteredAPI.sort(function (a, z) { return z.name.localeCompare(a.name) })
            if (RatingUp) ordenado = filteredAPI.sort(function (low, max) { return low.rating - max.rating })
            if (RatingDown) ordenado = filteredAPI.sort(function (low, max) { return max.rating - low.rating })


            if (selectedOption !== '') {
                ordenado = ordenado.filter(game => game.genres.find(gen => gen.name === selectedOption))
                dispatch(FilterGamesClone(ordenado))
            } else {
                dispatch(FilterGamesClone(ordenado))
            }

        }

        if (onLyDB) {
            ordenado = filteredDB
            if (ordenado.length === 0 || ordenado === false) {
                window.alert('mi loco, no tienes nada en DB')
            }
            if (A_Z) ordenado = filteredDB.sort(function (a, z) { return a.name.localeCompare(z.name) })
            if (Z_A) ordenado = filteredDB.sort(function (a, z) { return z.name.localeCompare(a.name) })
            if (RatingUp) ordenado = filteredDB.sort(function (low, max) { return low.rating - max.rating })
            if (RatingDown) ordenado = filteredDB.sort(function (low, max) { return max.rating - low.rating })


            if (selectedOption !== '') {
                console.log('ORDENADO EN DB ======> ', ordenado);

                ordenado = ordenado.filter(game => game.genres.find(gen => gen.name == selectedOption))
                if (ordenado.length) {
                    dispatch(FilterGamesClone(ordenado))
                } else {
                    window.alert('no se encontraron juegos con el filtro especificado')
                }

            } else {
                dispatch(FilterGamesClone(ordenado))
            }


            /* ordenado.length === 0 || ordenado === false
                ? window.alert('mi loco, no tienes nada en DB')
                : selectedOption !== ''
                    ? ordenado.find(game => game.genre === selectedOption)
                        ? (
                            ordenado = ordenado.filter(game => game.genre === selectedOption),
                            dispatch(FilterGamesClone(ordenado))
                        )
                        : window.alert('no se encontraron juegos con el filtro indicado en la base de datos')
                    : dispatch(FilterGamesClone(ordenado)) */




        }
    }

    return (
        <section >
            {/* poner alguna imagen de logo que está ya cargada... */}

            {
                viewFilter
                    ? (
                        <form onSubmit={toViewInHome}>
                            <input checked={A_Z} type={"checkbox"} onChange={() => { HC_A_Z() }
                            } /> A-Z
                            <input checked={Z_A} type={"checkbox"} onChange={() => { HC_Z_A() }
                            } /> Z-A
                            <input checked={RatingUp} type={"checkbox"} onChange={() => { HC_RatingUp() }
                            } /> Rating ↗
                            <input checked={RatingDown} type={"checkbox"} onChange={() => { HC_RatingDown() }
                            } /> Rating ↘
                            <input checked={onLyDB} type={"checkbox"} onChange={() => { HC_OnlyDB() }
                            } /> Only DB
                            <input checked={onLyAPI} type={"checkbox"} onChange={() => { HC_OnlyAPI() }
                            } /> Only API
                            <select value={selectedOption} onChange={HC_Option}>
                                <option value=''>Select Genre</option>
                                {
                                    genresGamesList.map(genre => {
                                        return (<option value={genre.name}>{genre.name}</option>)

                                    })
                                }
                            </select>
                            <button type="submit">Filter</button>
                            <button onClick={() => {
                                if (filteredGamesList.length) {
                                    setViewFilter(!viewFilter)
                                    setA_Z(false)
                                    setRatingUp(false)
                                    setRatingDown(false)
                                    setOnlyDB(false)
                                    setOnlyAPI(false)
                                    dispatch(ResetGamesFilter())
                                } else {
                                    setViewFilter(!viewFilter)
                                    setA_Z(false)
                                    setRatingUp(false)
                                    setRatingDown(false)
                                    setOnlyDB(false)
                                    setOnlyAPI(false)
                                }
                            }}>
                                Deactive Filter
                            </button>
                        </form>
                    )
                    : (<button onClick={() => { setViewFilter(!viewFilter) }}>Active Filter</button>)
            }


            <div>
                <input type='text' placeholder="search game" onChange={getName} />
                <button onClick={() => {
                    dispatch(searchGames(searchGameName))
                    setViewFilter(!viewFilter)
                    setA_Z(false)
                    setRatingUp(false)
                    setRatingDown(false)
                    setOnlyDB(false)
                    setOnlyAPI(false)
                    dispatch(ResetGamesFilter())
                }}>Search</button>
            </div>
            <hr />
            <div>
                <button onClick={() => { dispatch(ResetGames()) }}>Reset</button>
            </div>
            <div>
                <Link to='/createVGame'>
                    <button>Create Game</button>
                </Link>
            </div>
        </section >
    )
}

export default NavBar