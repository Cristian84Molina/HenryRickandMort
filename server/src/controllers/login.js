const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (!email || !password) return res.status(400).send("Faltan Datos");
    const user = await User.findOne({ where: { email: email } }); // findOne buscamos al usuario
    if (!user) return res.status(403).send("Usuario no encontrado");
    
    return user.password === password
      ? res.status(200).json({ access: true })
      : res.status(403).send("Contraseña incorrecta");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports= login

////////////////////////////////////////////////////////////////
// ANTES DE HACERLO CON LA BASE DE DATOS

/* const users = require("../utils/users");

const login = (req, res) => {
  const { email,  password } = req.query; */

/*  const found = users.find((user) => {
    user.email === email && user.password === password;
  }); */ // verificamos si existe el usuario

/*   if(users[0].email === email && users[0].password === password ){
    res.status(200).json({access: true})
  }else {
    res.status(200).json({access: false})
  }

  
};

module.exports= login */
