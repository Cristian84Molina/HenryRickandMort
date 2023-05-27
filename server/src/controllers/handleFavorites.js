// en este caso lo hacemos junto por que ya lo teniamo asi
const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;
  try {
    if (!name || !origin || !status || !image || !species || !gender)
      return res.status(401).send("Faltan Datos");
    await Favorite.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });
    const favs = await Favorite.findAll()
    return res.status(200).json(favs);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFav = async (req, res) => {
  const {id} = req.params
  try {
    await Favorite.destroy({where: {id: id}})

    const favs = await Favorite.findAll()

    return res.status(200).json(favs)

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  postFav,
  deleteFav,
};

////////////////////////////////////////////////////
// Antes de la conexion del server
/* let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.status(200).json(myFavorites);
}

const deleteFav = (req, res) =>{

  myFavorites = myFavorites.filter(
    (character) => +req.params.id !== character.id);
    res.status(200).json(myFavorites)
  
}

module.exports = {
    postFav,
    deleteFav,
    
}
 */
