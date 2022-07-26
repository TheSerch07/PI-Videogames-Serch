import axios from "axios";

export const FETCH_VIDEOGAMES = "@videogames/fetch_videogames";
export const FETCH_VIDEOGAMES_NAME = "@videogames/fetch_videogames_name"
export const ORDER_VIDEOGAMES = "@videogames/order_alp"

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

export function orderVideogames(ord) {
    return {
        type: ORDER_VIDEOGAMES,
        payload: ord
    }
}