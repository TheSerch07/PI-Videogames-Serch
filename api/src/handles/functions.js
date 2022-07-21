const { Videogame, Genre } = require("../db.js");
const axios = require("axios");
const { Op } = require("sequelize");

function videogameInfo(data) {
    return {
        id: data.id,
        name: data.name,
        image: data.background_image,
        genres: data.genres.map((genre) => {
            return {
                name : genre.name}
            }),
        releaseDate: data.released,
        rating: data.rating,
        platforms: data.platforms.map((platform) => platform.platform.name)
    }
};

async function getVideogamesApi() {
    let page = 1
    let arrayGames = []
    while (page < 6) {
        const info = await axios("https://api.rawg.io/api/games?key=22b7d9c1190846e38e66003610885078&page=" + page)
        info.data.results.forEach((game) => {
            arrayGames.push(videogameInfo(game))
        })
        page++
    }
    // console.log(info.data.results)
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
    const infoForId = await axios("https://api.rawg.io/api/games/" + id + "?key=22b7d9c1190846e38e66003610885078")
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

async function getGenres() {
    const genresInDb = await Genre.findAll()
    if (genresInDb.length < 1) {
        const genresApi = await axios("https://api.rawg.io/api/genres?key=22b7d9c1190846e38e66003610885078")
        const genresArray = genresApi.data.results.map((genre) => {
            return {
                name: genre.name
            }
        })
        await Genre.bulkCreate(genresArray)
    }
}

async function getGenresDb() {
    let genreDb = await Genre.findAll()
    return genreDb
}
// console.log(getVideogamesApi())
// console.log(getVideogamesApiName("halo"))
// console.log(getVideogamesApiId(339268))

module.exports = {
    getVideogamesApi,
    getVideogamesApiName,
    getVideogamesApiId,
    getVideogamesDb,
    getVideogamesDbName,
    getVideogamesDbId,
    postVideogame,
    getGenres,
    getGenresDb
}