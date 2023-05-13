import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorite.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = (props) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false)

  const handChange = (e) =>{
    const {name,value} = e.target;
    switch(name){
      case 'order':
        setAux(!aux)
        return dispatch(orderCards(value))

      case 'filter':
        setAux(!aux)
        return dispatch(filterCards(value))
    }
  }

  return (
    <div className={style.divGeneral}>
      <div>
        <select name="order" onChange={handChange}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filter" onChange={handChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {props.myFavorites.map((personaje) => {
        return (
          <Card
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            image={personaje.image}
          />
        );
      })}
    </div>
  );
};

const removeDuplicates = (arr) => {
  const seen = {};
  return arr.filter((personaje) => {
    if (seen.hasOwnProperty(personaje.id)) {
      return false;
    } else {
      seen[personaje.id] = true;
      return true;
    }
  });
};
const mapStateToProps = (state) => {
  return {
    myFavorites: removeDuplicates(state.myFavorites),
  };
};

/* const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
}; */

export default connect(mapStateToProps, null)(Favorites);
