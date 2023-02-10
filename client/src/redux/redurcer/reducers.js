import {
    GET_ALL_GAMES,
    GET_ALL_GENRES,
    GET_BY_ID,
    GET_SEARCH_GAME,
    POST_NEW_GAME,
    FILTER,
    RESET
} from '../actionsTypes'

const initialState = {
    all100Games: [],
    searchedGames: [],
    filteredGames: {},
    genres: [],
    detailGame: [],
    /* loading: false */
};
const rootReducer = (state = initialState, action) => {
    console.log('actionss', action.payload);
    switch (action.type) {

        case GET_ALL_GAMES:
            return {
                ...state,
                all100Games: action.payload,
                searchedGames: [],
                filteredGames: []
            };
        case GET_ALL_GENRES:
            return {
                ...state,
                genres: action.payload,
            };
        case GET_BY_ID:
            return {
                ...state,
                detailGame: action.payload,
            }
        case GET_SEARCH_GAME:
            return {
                ...state,
                searchedGames: action.payload
            }
        case RESET:
            return {
                ...state,
                searchedGames: action.payload
            }
        default:
            return {
                ...state
            }
    }
}


export default rootReducer