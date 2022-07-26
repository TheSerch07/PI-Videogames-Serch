import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideogames } from "../store/actions";
import Videogame from "./Videogame.jsx";

export default function Videogames() {
    let videogames = useSelector((state) => state.filteredVideogames)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchVideogames())
    }, [dispatch])

    return (
        <div>
            {videogames.map((videogame) => {
                return <Videogame key={videogame.id} name={videogame.name} image={videogame.image} genres={videogame.genres} />
            })}
        </div>
    )
}