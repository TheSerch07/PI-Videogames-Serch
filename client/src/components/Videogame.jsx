import { Link } from "react-router-dom"

export default function Videogame( { id, name, image, genres } ) {
    return (
        <div>
            <Link to={`/home/${id}`}>
                <h1>{name}</h1>
            </Link>
            {image?<img src={image} alt="videogameImage"/>:<img src="https://img.unocero.com/2021/11/Videojuegos-fuentes-de-informacion-gamers-.jpg" alt="videogameImage" /> }
            <h2>{genres.map((genre) => {
                return genre.name
                })}</h2>
        </div>
    )
}