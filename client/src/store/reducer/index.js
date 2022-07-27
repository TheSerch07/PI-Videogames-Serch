import { ASC, MIN } from "../../components/Order";
import { FETCH_GENRES, FETCH_VIDEOGAMES, FETCH_VIDEOGAMES_NAME, FILTERED_VIDEOGAMES_GENRE, FILTERED_VIDEOGAMES_ORIGIN, ORDER_VIDEOGAMES, ORDER_VIDEOGAMES_RATING, POST_VIDEOGAME } from "../actions";

const initialState = {
    videoGames: [],
    filteredVideogames: [],
    genres: []
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
        case FETCH_GENRES: 
            return {
                ...state,
                genres: action.payload
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
        case ORDER_VIDEOGAMES_RATING: 
            let orderVideogamesRat = [...state.filteredVideogames]
            orderVideogamesRat = orderVideogamesRat.sort((a, b) => {
                if (a.rating < b.rating) {
                    return action.payload === MIN ? -1 : 1
                }
                if (a.rating > b.rating) {
                    return action.payload === MIN ? 1 : -1
                }
                return 0
            })
            return {
                ...state,
                filteredVideogames: orderVideogamesRat
            }
        case FILTERED_VIDEOGAMES_GENRE:
            let filteredVideogames = [...state.videoGames]
            let genreVideogame = action.payload === "All" ? filteredVideogames : filteredVideogames.filter((genre) => genre.genres.some((genre) => genre.name === action.payload))
            return {
                ...state,
                filteredVideogames: genreVideogame
            }
        case FILTERED_VIDEOGAMES_ORIGIN: 
            let filteredVideogamesOri = [...state.videoGames]
            let originVideogame = action.payload === "All" ? filteredVideogamesOri : action.payload === "API" ? filteredVideogamesOri.filter((origin) => origin.id.toString().length < 10) : filteredVideogamesOri.filter((origin) => origin.id.toString().length > 10)
            console.log(originVideogame)
            return {
                ...state,
                filteredVideogames: originVideogame
            }
        case POST_VIDEOGAME:
            return {
                ...state
            }
        default: 
            return {
                ...state
            }
    }
}