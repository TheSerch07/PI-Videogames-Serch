const { Videogame, Genre } = require("../db.js");
const axios = require("axios");
const { Op } = require("sequelize");

function videogameInfo(data) {
    return {
        id: data.id,
        name: data.name,
        image: data.background_image,
        genre: data.genres.map((genre) => genre.name),
        releaseDate: data.released,
        rating: data.rating,
        platforms: data.platforms.map((platform) => platform.platform.name)
    }
};

async function getVideogamesApi() {
    let arrayGames = []
    const info = await axios("https://api.rawg.io/api/games?key=22b7d9c1190846e38e66003610885078")
    // console.log(info.data.results)
    info.data.results.forEach((game) => {
        arrayGames.push(videogameInfo(game))
    })
    console.log(arrayGames)
    return arrayGames
};

async function getVideogamesApiName(name) {
    let arrayGames = []
    const infoForName = await axios("https://api.rawg.io/api/games?search=" + name + "&key=22b7d9c1190846e38e66003610885078")
    infoForName.data.results.forEach((game) => {
        arrayGames.push(videogameInfo(game))
    })
    console.log(arrayGames, "jeje")
    return arrayGames
};

async function getVideogamesApiId(id) {
    const infoForId = await axios("https://api.rawg.io/api/games/"+ id + "?key=22b7d9c1190846e38e66003610885078")
    console.log(videogameInfo(infoForId.data), "añañay")
    return videogameInfo(infoForId.data)
};

async function getVideogamesDb() {
    const videogameFromDb = await Videogame.findAll({
        include: {
            model: Genre,
            attribures: ["name"]
        }
    })
    return videogameFromDb
};

async function getVideogamesDbName(name) {
    const videogameDbName = await Videogame.findAll({
        include: Genre,
        where: {
            name: {
                [Op.iLike]: `%${name}`
            }
        }
    })
    return videogameDbName
};

async function getVideogamesDbId(id) {
    const videogameByPk = await Videogame.findByPk(id, {
        include: {
            model: Genre
        }
    })
    return videogameByPk
};

async function postVideogame({ name, description, releaseDate, rating, platforms, genre }) {
    const newVideogame = await Videogame.create({ name, description, releaseDate, rating, platforms }) 
    const genreDb = await Genre.findAll({
        where: {
            name: genre
        }
    })
    await newVideogame.addGenre(genreDb)
    return newVideogame
};




// console.log(getVideogamesApi())
// console.log(getVideogamesApiName("halo"))
// console.log(getVideogamesApiId(339268))