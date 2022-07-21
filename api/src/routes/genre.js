const { Router } = require("express")
const { getGenre } = require("../handles/genre")

const router = Router()

router.get("/", getGenre)

module.exports = router