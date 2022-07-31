import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postVideogame, fetchGenres } from "../store/actions";
import { useDispatch, useSelector } from "react-redux"

let regExp = /[+*_,.]/gi

function validateInput(input) {
    let errors = {}
    let result = regExp.test(input.name)

    if (!input.name) {
        errors.name = "This field can't be blank!"
    }
    if (result) {
        errors.name = `The name cannot include these symbols "+, *, _, ,, ."`
    }
    if (!input.description) {
        errors.description = "This field can't be blank!"
    }
    if (!input.releaseDate) {
        errors.releaseDate = "This field can't be blank!"
    }
    if (!input.rating) {
        errors.rating = "This field can't be blank!"
    }
    if (input.platforms.length < 1) {
        errors.platforms = "This field can't be blank!"
    }
    if (input.genre.length < 1) {
        errors.genre = "This field can't be blank!"
    }
    return errors
}

export default function CreateVideogame() {
    let dispatch = useDispatch()
    let genres = useSelector((state) => state.genres)
    
    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch])
    let history = useHistory()

    const [errors, setErrors] = useState({})
    const [videogameInput, setVideogameInput] = useState({
        name: "",
        description: "",
        releaseDate: "",
        rating: "",
        platforms: [],
        genre: []
    })

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postVideogame(videogameInput))
        alert("Videogame Created!")
        setVideogameInput({
            name: "",
            description: "",
            releaseDate: "",
            rating: "",
            platforms: [],
            genre: []
        })
        history.push("/home")
    }
    
    function handleChange(e) {
        setVideogameInput({
            ...videogameInput,
            [e.target.name] : e.target.value
        })
        setErrors(validateInput({
            ...videogameInput,
            [e.target.name] : e.target.value
        }))
    }

    function handleSelectPlatforms(e) {
        setVideogameInput({
            ...videogameInput,
            platforms : [...videogameInput.platforms, e.target.value] 
        })
        setErrors(validateInput({
            ...videogameInput,
            platforms : [...videogameInput.platforms, e.target.value]
        }))
    }

    function handleSelectGenres(e) {
        setVideogameInput({
            ...videogameInput,
            genre: [...videogameInput.genre, e.target.value]
        })
        setErrors(validateInput({
            ...videogameInput,
            platforms : [...videogameInput.platforms, e.target.value]
        }))
    }

    function filteredPlatforms(platform) {
        setVideogameInput({
            ...videogameInput,
            platforms: videogameInput.platforms.filter((p) => p !== platform)
        })
    }

    function filteredGenres(genre) {
        setVideogameInput({
            ...videogameInput,
            genre: videogameInput.genre.filter((g) => g !== genre)
        })
    }
    
    console.log(videogameInput, "??")
    console.log(genres)
    console.log(errors, "errors")
    return (
        <div>
            <Link to="/home">
                <button>Back to Home!</button>
            </Link>
            <h1>Create a Videogame!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={videogameInput.name} onChange={handleChange}/>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                    <label>Description:</label>
                    <textarea type="textarea" name="description" cols="30" rows="10" value={videogameInput.description} onChange={handleChange}/>
                    {errors.description && <p>{errors.description}</p>}
                </div>
                <div>
                    <label>Release Date:</label>
                    <input type="date" name="releaseDate" value={videogameInput.releaseDate} onChange={handleChange}/>
                    {errors.releaseDate && <p>{errors.releaseDate}</p>}
                </div>
                <div>
                    <label>Rating:</label>
                    <input type="range" name="rating" min="0" max="10" value={videogameInput.rating} onChange={handleChange}/>
                    {errors.rating && <p>{errors.rating}</p>}
                </div>
                <div>
                    <label>Platforms:</label>
                    <select onChange={handleSelectPlatforms}>
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
                    {errors.platforms && <p>{errors.platforms}</p>}
                </div>
                <div>
                    {
                        videogameInput.platforms.map((platform) => {
                            return <div key={platform}><button onClick={() => filteredPlatforms(platform)}>X</button><h6>{platform}</h6></div>
                        })
                    }
                </div>
                <div>
                    <label>Genres:</label>
                    <select onChange={handleSelectGenres}>
                        {
                            genres.map((genre) => {
                                return <option key={genre.id}>{genre.name}</option>
                            })
                        }
                    </select>
                    {errors.genre && <p>{errors.genre}</p>}
                </div>
                <div>
                    {
                        videogameInput.genre.map((genre) => {
                            return <div key={genre}><button onClick={() => filteredGenres(genre)}>X</button><h6>{genre}</h6></div>
                        })
                    }
                </div>
                {(Object.entries(errors).length > 0) ? <button type="button" onClick={() => alert("Complete all fields!")}>Create!</button> : <button type="submit">Create!</button>}
                
            </form>
        </div>
    )
}