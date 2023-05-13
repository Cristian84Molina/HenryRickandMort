import React, { useState, useEffect } from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";
import { agregarPersonaje, removePersonaje } from "../../redux/actions";
import { connect } from "react-redux";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removePersonaje(props.id);
    } else {
      setIsFav(true);
      props.agregarPersonaje(props); // en este caso recibe todas las props
    }
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [props.myFavorites]);
 // este useEfect se ejecuta cuando cambie myFavorites
 
  return (
    <div className={style.divGeneral}>
      <button className={style.boton} onClick={props.onClose}>
        X
      </button>
      <div className={style.botonFav}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <img className={style.img} src={props.image} alt="" />
      <div className={style.nameContainer}>
        <Link to={`/detail/${props.id}`}>
          <h2 className={style.name}>{props.name}</h2>
        </Link>
      </div>
      <h2 className={style.species}>{props.species}</h2>
      <h2 className={style.gender}>{props.gender}</h2>
    </div>
  );
}

const mapDispachToPops = (dispatch) => {
  return {
    agregarPersonaje: (fav) => {
      dispatch(agregarPersonaje(fav));
    },
    removePersonaje: (id) => {
      dispatch(removePersonaje(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispachToPops)(Card);
