import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  let { id } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
    
  }, [id]);

  return (
    <>
      <div>
        <Link to={"/home"}>
          <button className={style.return}>Return Home</button>
        </Link>
      </div>
      <div className={style.container}>
        <img className={style.img} src={character.image} alt="" />
        <h1 className={style.img}>Id: {character.id}</h1>
        <h1 className={style.img}>Name: {character.name}</h1>
        <h1 className={style.img}>Status: {character.status}</h1>
        <h1 className={style.img}>Specie: {character.species}</h1>
        <h1 className={style.img}>Gender: {character.gender}</h1>
        <h1 className={style.img}>Origin: {character.origin?.name} </h1>
      </div>
    </>
  );
};

export default Detail;
