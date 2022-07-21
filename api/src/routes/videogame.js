const { Router } = require("express")
const { getVideogames, getVideogamesId, postVideogames } = require("../handles/videogame")

const router = Router()

router.get("/", getVideogames)
router.get("/:id", getVideogamesId)
router.post("/", postVideogames)

module.exports = router