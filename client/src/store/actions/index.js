import axios from "axios";

export const FETCH_VIDEOGAMES = "@videogames/fetch_videogames";
export const FETCH_VIDEOGAMES_NAME = "@videogames/fetch_videogames_name"
export const FETCH_VIDEOGAMES_DETAIL = "@videogames/fetch_videogames_detail"
export const FETCH_GENRES = "@videogames/fetch_genres"
export const ORDER_VIDEOGAMES = "@videogames/order_alp"
export const ORDER_VIDEOGAMES_RATING = "@videogames/order_rating"
export const FILTERED_VIDEOGAMES_GENRE = "@videogames/filtered_genre"
export const FILTERED_VIDEOGAMES_ORIGIN = "@videogames/filtered_origin"
export const POST_VIDEOGAME = "@videogames/post_videogame"
export const CLEAN_STATE = "@videogames/clean"

export function fetchVideogames() {
    return function(dispatch) {
        axios.get("http://localhost:3001/videogames")
        .then((videogame) => {
            dispatch({
                type: FETCH_VIDEOGAMES,
                payload: videogame.data
            })
        })
        .catch((err) => console.log(err))
    }
}

export function fetchVideogamesName(name) {
    return function(dispatch) {
        axios.get("http://localhost:3001/videogames?name=" + name)
        .then((videogame) => {
            dispatch({
                type: FETCH_VIDEOGAMES_NAME,
                payload: videogame.data
            })
        })
        .catch((err) => console.log(err))
    }
}

export function fetchVideogamesDetail(id) {
    return function(dispatch) {
        axios.get("http://localhost:3001/videogames/" + id)
        .then((videogame) => {
            dispatch({
                type: FETCH_VIDEOGAMES_DETAIL,
                payload: videogame.data
            })
        })
        .catch((err) => console.log(err))
    }
}

export function fetchGenres() {
    return function(dispatch) {
        axios.get("http://localhost:3001/genres")
        .then((genre) => {
            dispatch({
                type: FETCH_GENRES,
                payload: genre.data
            })
        })
    }
}

export function orderVideogames(ord) {
    return {
        type: ORDER_VIDEOGAMES,
        payload: ord
    }
}

export function orderVideogamesRating(ord) {
    return {
        type: ORDER_VIDEOGAMES_RATING,
        payload: ord
    }
}

export function filteredVideogamesGenre(genre) {
    return {
        type: FILTERED_VIDEOGAMES_GENRE,
        payload: genre
    }
}

export function filteredVideogamesCreated(origin) {
    return {
        type: FILTERED_VIDEOGAMES_ORIGIN,
        payload: origin
    }
}

export function postVideogame(videogame) {
    return function(dispatch) {
        axios.post("http://localhost:3001/videogames", videogame)
        .then(() => {
        })
        .catch((err) => console.log(err))
    }
}
export function cleanDetail() {
    return {
        type: CLEAN_STATE
    }
}