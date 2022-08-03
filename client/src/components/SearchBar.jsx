import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchVideogamesName } from "../store/actions"
import styles from "../styles/SearchBar.module.css"

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
        <div className={styles.container}>
            <Link to="/videogame">
                <button className={styles.buttonCreate}>Create A Videogame!</button>
            </Link>
            <form className={styles.form} onSubmit={onSubmit}>
                <input className={styles.input} id="submit" type="text" placeholder="Name Videogame" onChange={onInputChange}/>
                <input className={styles.buttonSubmit} type="submit" value="Search Videogame!" />
            </form>
        </div>
    )
}