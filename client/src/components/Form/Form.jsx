import React from "react";
import style from './Form.module.css'
import { useState } from "react";
import validate from "./validation";


  
const Formulario = (props) => {
    const [userData, setUserData] = useState({
      email: "",
      password: "",
    });
  
    const [errors, setErrors] = useState({
      // un estado para los errores
      email: "",
      password: "",
    });
  
    const handleChange = (event) => {
      const property = event.target.name; // dejo en claro cual es la propiedad que quiero modificar
      const value = event.target.value; // dejo en claro el valor que quiero darle
  
      setUserData({ ...userData, [property]: value }); // aqui a traves del setForm agregamos a lo que tenia form el valor a la propiedad
      validate({ ...userData, [property]: value }, setErrors, errors); // validamos si el input del mail esta o no vacio
    };
  
    const handelSubmit = (event) => {
      event.preventDefault(); // el preventDefault solo es para el event submit
      props.login(userData);
    };
    
    return (
      <div className={style.divForm}>
      <form onSubmit={handelSubmit}>
        <div>
          <label className={style.label} htmlFor="email" >Email</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            className={errors.email ? style.error : style.success}
            onChange={handleChange}
            />
          <span className={style.span}>{errors.email}</span> 
        </div>
        <div>
          <label className={style.label} htmlFor="password">Password</label>
          <input 
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            />
            <span className={style.span}>{errors.password}</span>
        </div>
        <button className={style.button} type="submit">Login</button>
      </form>
      </div>
    );
  };
  
  export default Formulario;