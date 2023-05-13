const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await axios.get(url);
    if (response.data.name) {
      const { id, name, image, gender, species, status, origin } = response.data;
      const character = { id, name, image, gender, species, status, origin };
      res.status(200).json(character);
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getCharById;






/* const axios = require("axios");

const getCharById = ( req, res ) => {
  let { id } = req.params;
  console.log(id)
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  axios
    .get(url)
    .then((response) => {
      if (response.data.name) {
        const { id, name, image, gender, species, status, origin } =
          response.data;
        const character = { id, name, image, gender, species, status, origin };
        res.status(200).json(character);
      } else {
        res.status(404).send("Not found");
      }
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

module.exports = getCharById; */
