import {
    GET_ALL_GAMES,
    GET_ALL_GENRES,
    GET_BY_ID,
    GET_SEARCH_GAME,
    POST_NEW_GAME,
    FILTER,
    RESET,
    RESET_FILTERS,
    RESET_ALERT_POST
} from '../actionsTypes'

const initialState = {
    all100Games: [],
    searchedGames: [],
    clone: [],
    filteredGames: [],
    genres: [],
    detailGame: [],
    message: ''
    /* loading: false */
};
const rootReducer = (state = initialState, action) => {
    console.log('actionss', action.payload);
    switch (action.type) {

        case GET_ALL_GAMES:
            return {
                ...state,
                all100Games: action.payload,
                clone: action.payload
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
                searchedGames: action.payload,
                clone: action.payload
            }
        case FILTER:
            return {
                ...state,
                filteredGames: action.payload
            }
        case RESET:
            return {
                ...state,
                searchedGames: action.payload,
                filteredGames: action.payload,
                clone: state.all100Games
            }
        case RESET_FILTERS:
            return {
                ...state,
                filteredGames: action.payload
            }
        case POST_NEW_GAME:
            return {
                ...state,
                message: action.payload
            }
        case RESET_ALERT_POST:
            return {
                ...state,
                message: action.payload
            }
        default:
            return {
                ...state
            }
    }
}


export default rootReducer