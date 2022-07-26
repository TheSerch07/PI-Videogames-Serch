import { ASC } from "../../components/Order";
import { FETCH_VIDEOGAMES, FETCH_VIDEOGAMES_NAME, ORDER_VIDEOGAMES } from "../actions";

const initialState = {
    videoGames: [],
    filteredVideogames: []
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case FETCH_VIDEOGAMES:
            return {
                ...state,
                videoGames: action.payload,
                filteredVideogames: action.payload
            }
        case FETCH_VIDEOGAMES_NAME:
            return {
                ...state,
                filteredVideogames: action.payload
            }
        case ORDER_VIDEOGAMES: 
            let orderVideogames = [...state.filteredVideogames]
            orderVideogames = orderVideogames.sort((a, b) => {
                if (a.name < b.name) {
                    return action.payload === ASC ? -1 : 1
                }
                if (a.name > b.name) {
                    return action.payload === ASC ? 1 : -1
                }
                return 0
            })
            return {
                ...state,
                filteredVideogames: orderVideogames
            }
        default: 
            return {
                ...state
            }
    }
}