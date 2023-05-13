const users = require("../utils/users");

const login = (req, res) => {
  const { email,  password } = req.query;

 /*  const found = users.find((user) => {
    user.email === email && user.password === password;
  }); */ // verificamos si existe el usuario

  if(users[0].email === email && users[0].password === password ){
    res.status(200).json({access: true})
  }else {
    res.status(200).json({access: false})
  }

  
};

module.exports= login