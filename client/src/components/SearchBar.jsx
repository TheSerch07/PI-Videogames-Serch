import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchVideogamesName } from "../store/actions"

export default function SearchBar() {
    const [search, setSearch] = useState("")
    let dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault()
        dispatch(fetchVideogamesName(search))
        const input = document.getElementById("submit")
        input.value = ""
    }

    function onInputChange(e) {
        setSearch(e.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input id="submit" type="text" placeholder="Name Videogame" onChange={onInputChange}/>
                <input type="submit" value="Search Videogame!" />
            </form>
            <Link to="/videogame">
                <button>Create A Videogame!</button>
            </Link>
        </div>
    )
}