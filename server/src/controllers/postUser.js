const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("Faltan Datos");
    const user = await User.findOrCreate({
      where: { email: email, password: password }, // si tiene esta informacion npo va a crear lka entrada a la base de datos, solo lo devuelve
    });
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postUser;
