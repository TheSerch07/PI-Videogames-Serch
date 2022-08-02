import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchVideogamesDetail } from "../store/actions"

export default function Detail() {
    let { id } = useParams()
    const dispatch = useDispatch()
    const [videogame, setVideogame] = useState(null)
    
    useEffect(() => {
        dispatch(fetchVideogamesDetail(id))
    }, [dispatch])
    
    let detailVideogame = useSelector((state) => state.detail)
    // setVideogame(detailVideogame)
    console.log(id, "el id")
    console.log(detailVideogame, "el detail")
    // console.log(videogame, "en el estado")
    console.log(detailVideogame.length, "el lengggg")
    return (
        <div>

        <Link to="/home">
        <button>Back to Home!</button>
        </Link>
        {
            (Object.entries(detailVideogame).length > 0) ? 
            <div>
            <h1>{detailVideogame.name}</h1>
            <img src={detailVideogame.image} alt="videogameImage"/>
            <h2>{detailVideogame.genres.map((genre) => {
                return genre.name
            })}</h2>
            <h2>{detailVideogame.releaseDate}</h2>
            <h2>{detailVideogame.rating}</h2>
            <h2>{detailVideogame.platforms}</h2>
            </div>: 
            <div>a</div>
        }
        </div>
    )
}