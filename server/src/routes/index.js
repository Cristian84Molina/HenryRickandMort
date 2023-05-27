const getCharById = require("../controllers/getCharById.js")
const login = require("../controllers/login.js")
const { postFav, deleteFav } = require("../controllers/handleFavorites.js")
const postUser = require("../controllers/postUser.js")
const router = require("express").Router()



// ruta http://localhost:3001/rickandmorty

router.get("/character/:id", getCharById)

router.post("/login",postUser)

router.get("/login", login)


router.post("/fav",postFav)

router.delete("/fav/:id", deleteFav)

module.exports = router;