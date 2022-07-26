export default function Videogame( { name, image, genres } ) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="videogameImage"/>
            <h2>{genres.map((genre) => {
                return genre.name
                })}</h2>
        </div>
    )
}