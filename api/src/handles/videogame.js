const { getVideogamesApi, getVideogamesApiName, getVideogamesApiId, getVideogamesDb, getVideogamesDbName, getVideogamesDbId, postVideogame } = require("./functions")

const getVideogames = async (req, res, next) => {
    try {
        const { name } = req.query
        let videogameDb
        let videogameApi
        if (name) {
            videogameDb = await getVideogamesDbName(name)
            videogameApi = await getVideogamesApiName(name)
            return res.status(200).json([...videogameDb, ...videogameApi])
        } else {
            videogameDb = await getVideogamesDb()
            videogameApi = await getVideogamesApi()
            return res.status(200).json([...videogameDb, ...videogameApi])
        }
    } catch(err) {
        next(err)
    }
}

const getVideogamesId = async (req, res, next) => {
    try {
        const { id } = req.params
        let videogameDb
        let videogameApi
        if (id.length > 10) {
            videogameDb = await getVideogamesDbId(id)
            return res.status(200).json(videogameDb)
        }
        videogameApi = await getVideogamesApiId(id)
        return res.status(200).json(videogameApi)
    } catch(err) {
        next(err)
    }
}

const postVideogames = async (req, res, next) => {
    try {
        const values = req.body
        const createVideogame = await postVideogame(values)
        createVideogame.dataValues ? res.send({msg: "Videogame created!"}) : res.status(400).send({msg: "Enter the data correctly!"})
    } catch(err) {
        next(err)
    }
}

module.exports = {
    getVideogames,
    getVideogamesId,
    postVideogames
}