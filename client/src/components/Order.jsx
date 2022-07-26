import { useDispatch } from "react-redux"
import { fetchVideogames, orderVideogames } from "../store/actions"

export const ASC = "A-Z"
export const DES = "Z-A"
export const MIN = "Min"
export const MAX = "Max"

export default function Order() {
    const dispatch = useDispatch()

    function onSelectAlpChange(e) {
        dispatch(orderVideogames(e.target.value))
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
        </div>
    )
}