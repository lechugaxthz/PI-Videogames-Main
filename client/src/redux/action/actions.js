import axios from 'axios'
import {
    GET_ALL_GAMES,
    GET_ALL_GENRES,
    GET_BY_ID,
    GET_SEARCH_GAME,
    POST_NEW_GAME,
    FILTER,
    RESET
} from '../actionsTypes'

console.log(GET_ALL_GAMES);

export const GetAllVGames = () => {
    return async function (dispach) {
        let games = await axios.get(`http://localhost:3001/videogames`)
        console.log('games=>>>>>> ', games.data);
        return dispach({
            type: GET_ALL_GAMES,
            payload: games.data
        })
    }
}

export const GetAllGamesGenres = () => {
    return async function (dispach) {
        let games = await axios.get(`http://localhost:3001/genres`)
        return dispach({
            type: GET_ALL_GENRES,
            payload: games.data
        })
    }
}

export const GetDetailGame = (id) => {
    return async function (dispach) {
        let game = await axios.get(`http://localhost:3001/videogame/${id}`)
        console.log('detail ===> ', game.data);
        return dispach({
            type: GET_BY_ID,
            payload: game.data
        })
    }
}

export const searchGames = (name) => {
    return async function (dispach) {
        let games = await axios.get(`http://localhost:3001/videogames?name=${name}`)
        return dispach({
            type: GET_SEARCH_GAME,
            payload: games.data
        })
    }
}

export const ResetGames = () => {
    return async function (dispach) {
        return dispach({
            type: RESET,
            payload: []
        })
    }
}
