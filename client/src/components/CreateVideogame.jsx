import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postVideogame, fetchGenres } from "../store/actions";
import { useDispatch, useSelector } from "react-redux"

export default function CreateVideogame() {
    let dispatch = useDispatch()
    let genres = useSelector((state) => state.genres)
    
    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch])
    let history = useHistory()

    const [videogameInput, setVideogameInput] = useState({
        name: "",
        description: "",
        releaseDate: "",
        rating: "",
        platforms: [],
        genre: []
    })

    function handleChange(e) {
        setVideogameInput({
            ...videogameInput,
            [e.target.name] : e.target.value
        })
    }
    
    console.log(videogameInput, "??")
    console.log(genres)
    return (
        <div>
            <Link to="/home">
                <button>Back to Home!</button>
            </Link>
            <h1>Create a Videogame!</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={videogameInput.name} onChange={handleChange}/>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea type="textarea" name="description" cols="30" rows="10" value={videogameInput.description} onChange={handleChange}/>
                </div>
                <div>
                    <label>Release Date:</label>
                    <input type="date" name="releaseDate" value={videogameInput.releaseDate} onChange={handleChange}/>
                </div>
                <div>
                    <label>Rating:</label>
                    <input type="range" name="rating" min="0" max="10" value={videogameInput.rating} onChange={handleChange}/>
                </div>
                <div>
                    <label>Platforms:</label>
                    <select>
                        <option value="PC">PC</option>
                        <option value="PlayStation 5">PlayStation 5</option>
                        <option value="PlayStation 4">PlayStation 4</option>
                        <option value="Xbox One">Xbox One</option>
                        <option value="Xbox Series S/X">Xbox Series S/X</option>
                        <option value="Nintendo Switch">Nintendo Switch</option>
                        <option value="iOS">iOS</option>
                        <option value="Android">Android</option>
                        <option value="Nintendo 3DS">Nintendo 3DS</option>
                        <option value="Nintendo DS">Nintendo DS</option>
                        <option value="Nintendo DSi">Nintendo DSi</option>
                        <option value="macOS">macOS</option>
                        <option value="Linux">Linux</option>
                        <option value="Xbox 360">Xbox 360</option>
                        <option value="Xbox">Xbox</option>
                        <option value="PlayStation 3">PlayStation 3</option>
                        <option value="PlayStation 2">PlayStation 2</option>
                        <option value="PlayStation">PlayStation</option>
                        <option value="PS Vita">PS Vita</option>
                        <option value="PSP">PSP</option>
                        <option value="Wii U">Wii U</option>
                        <option value="Wii">Wii</option>
                        <option value="Web">Web</option>
                    </select>
                </div>
                <div>
                    <label>Genres:</label>
                    <select>
                        {
                            genres.map((genre) => {
                                return <option key={genre.id}>{genre.name}</option>
                            })
                        }
                    </select>
                </div>
            </form>
        </div>
    )
}