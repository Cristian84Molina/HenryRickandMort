import React, { useState } from "react";
import style from './searchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



export default function SearchBar(props) {

  const [character, setCharacter] = useState ('') // es lo que escribe el usuario

  const handleChange = (event) => {
    setCharacter(event.target.value);
};


  return (
    <div className={style.container}>
      <h1 className={style.title}>Rick And Morty</h1>
      <input className={style.input} type="search" placeholder="Ingrese el ID de personaje" onChange={handleChange}/>
      <button className={style.boton} onClick={()=>props.onSearch(character)}><FontAwesomeIcon icon={faSearch} /></button>
      <button className={style.boton1} onClick={()=>props.onRandomCharacter(character)}>Random    <FontAwesomeIcon icon={faSearch} /></button>
    </div>
  );
}

// agregamos props.onSearch