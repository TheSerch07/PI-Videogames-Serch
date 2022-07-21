const { getGenres, getGenresDb } = require("./functions")

const getGenre = async (req, res, next) => {
    try {
        await getGenres()
        const genreInDb = await getGenresDb()
        res.status(200).json(genreInDb)
    } catch(err) {
        next(err)
    }
}

module.exports = {
    getGenre
}