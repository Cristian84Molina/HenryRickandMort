import React from "react";
import style from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={style.container}>
      <h1>Error 404: Pagina no encontrada</h1>
    </div>
  );
};

export default NotFound;