import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideogames } from "../store/actions";
import Videogame from "./Videogame.jsx";
import Pagination from "./Pagination";

export default function Videogames() {
    let videogames = useSelector((state) => state.filteredVideogames)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchVideogames())
    }, [dispatch])

    const [currentPage, setCurrentPage] = useState(1)
    const [videogamePerPage, setVideogamePerPage] = useState(15)
    const indexOfLast = currentPage * videogamePerPage
    const indexOfFirst = indexOfLast - videogamePerPage
    const currentVideogames = videogames.slice(indexOfFirst, indexOfLast)

    function pagination(pageNumber) {
        setCurrentPage(pageNumber)
    }

    console.log(videogames, "a?")
    return (
        <div>
            {currentVideogames.map((videogame) => {
                return <Videogame key={videogame.id} name={videogame.name} image={videogame.image} genres={videogame.genres} />
            })}
            <Pagination videogamesPerPage={videogamePerPage} videogames={videogames.length} pagination={pagination} />
        </div>
    )
}