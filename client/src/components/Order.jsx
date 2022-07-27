import { useDispatch } from "react-redux"
import { fetchVideogames, filteredVideogamesCreated, filteredVideogamesGenre, orderVideogames, orderVideogamesRating } from "../store/actions"

export const ASC = "A-Z"
export const DES = "Z-A"
export const MIN = "Min"
export const MAX = "Max"

export default function Order() {
    const dispatch = useDispatch()

    function onSelectAlpChange(e) {
        dispatch(orderVideogames(e.target.value))
    }

    function onSelectRatingChange(e) {
        dispatch(orderVideogamesRating(e.target.value))
    }

    function onSelectGenreChange(e) {
        dispatch(filteredVideogamesGenre(e.target.value))
    }

    function onSelectOriginChange(e) {
        dispatch(filteredVideogamesCreated(e.target.value))
    }

    function reloadVideogames() {
        dispatch(fetchVideogames())
    }

    return (
        <div>
            <button onClick={reloadVideogames}>Reload Videogames!</button>
            <select name="orderAlp" onChange={onSelectAlpChange}>
                <option value={ASC}>A-Z</option>
                <option value={DES}>Z-A</option>
            </select>
            <select name="orderRat" onChange={onSelectRatingChange}>
                <option value={MIN}>Min</option>
                <option value={MAX}>Max</option>
            </select>
            <select name="filterGenre" onChange={onSelectGenreChange}>
                <option value="All">All</option>
                <option value="Action">Action</option>
                <option value="Indie">Indie</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="Strategy">Strategy</option>
                <option value="Shooter">Shooter</option>
                <option value="Casual">Casual</option>
                <option value="Simulation">Simulation</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Arcade">Arcade</option>
                <option value="Platformer">Platformer</option>
                <option value="Racing">Racing</option>
                <option value="Massively Multiplayer">Massively Multiplayer</option>
                <option value="Sports">Sports</option>
                <option value="Fighting">Fighting</option>
                <option value="Family">Family</option>
                <option value="Board Games">Board Games</option>
                <option value="Educational">Educational</option>
                <option value="Card">Card</option>
            </select>
            <select name="filterOrigin" onChange={onSelectOriginChange}>
                <option value="All">All</option>
                <option value="API">API</option>
                <option value="DataBase">DataBase</option>
            </select>
        </div>
    )
}