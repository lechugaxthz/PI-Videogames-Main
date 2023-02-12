import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterGamesClone, ResetGames, ResetGamesFilter, searchGames } from "../../redux/action/actions";
import './cssInNav/nav.css'

const NavBar = () => {

    const dispatch = useDispatch()
    const cloneGames = useSelector((state) => state.clone)
    const filteredGamesList = useSelector((state) => state.filteredGames)
    /* Search */
    const [searchGameName, setSearchGameName] = useState('')
    const getName = (event) => {
        console.log(event.target.value);
        setSearchGameName(event.target.value)
    }
    /* FilterView and reset */
    const [viewFilter, setViewFilter] = useState(false)
    /* Filter state */
    /* const [filter, setFilter] = useState([]) */
    /* Filter */
    const [A_Z, setA_Z] = useState(false)
    const [Z_A, setZ_A] = useState(false)
    const [RatingUp, setRatingUp] = useState(false)
    const [RatingDown, setRatingDown] = useState(false)
    const [onLyDB, setOnlyDB] = useState(false)
    const [onLyAPI, setOnlyAPI] = useState(false)


    let HC_A_Z = () => {
        if (A_Z) {
            setZ_A(!A_Z)
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

    let ordenado

    const toViewInHome = (event) => {
        event.preventDefault()
        ordenado = false
        if (!onLyAPI && !onLyDB) {
            console.log('se llego');

            if (A_Z) ordenado = toOrder.sort(function (a, z) { return a.name.localeCompare(z.name) })
            if (Z_A) ordenado = toOrder.sort(function (a, z) { return z.name.localeCompare(a.name) })
            if (RatingUp) ordenado = toOrder.sort(function (low, max) { return low.rating - max.rating })
            if (RatingDown) ordenado = toOrder.sort(function (low, max) { return max.rating - low.rating })

            console.log('ordenado UP =====> ', ordenado);
            dispatch(FilterGamesClone(ordenado))
        }

        if (onLyAPI) {
            console.log('se llego dentro de onlyApi');

            if (A_Z) ordenado = filteredAPI.sort(function (a, z) { return a.name.localeCompare(z.name) })
            if (Z_A) ordenado = filteredAPI.sort(function (a, z) { return z.name.localeCompare(a.name) })
            if (RatingUp) ordenado = filteredAPI.sort(function (low, max) { return low.rating - max.rating })
            if (RatingDown) ordenado = filteredAPI.sort(function (low, max) { return max.rating - low.rating })
            console.log('toOder =====> ', toOrder);

            dispatch(FilterGamesClone(ordenado))
        }
        if (onLyDB) {
            console.log('se llego dentro de DB');

            if (A_Z) ordenado = filteredDB.sort(function (a, z) { return a.name.localeCompare(z.name) })
            if (Z_A) ordenado = filteredDB.sort(function (a, z) { return z.name.localeCompare(a.name) })
            if (RatingUp) ordenado = filteredDB.sort(function (low, max) { return low.rating - max.rating })
            if (RatingDown) ordenado = filteredDB.sort(function (low, max) { return max.rating - low.rating })
            console.log('toOder =====> ', toOrder);

            if (ordenado.length === 0 || ordenado === false) window.alert('mi loco, no tienes nada en DB')
            dispatch(FilterGamesClone(ordenado))
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
                <button onClick={() => { dispatch(searchGames(searchGameName)) }}>Search</button>
            </div>
            <hr />
            <div>
                <button onClick={() => { dispatch(ResetGames()) }}>Reset</button>
            </div>
        </section >
    )
}

export default NavBar