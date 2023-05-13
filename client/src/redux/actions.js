import axios from "axios"
import { ADD_PERSONAJE, REMOVE_PERSONAJE, FILTER, ORDER } from "./actions-types"

export const agregarPersonaje = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_PERSONAJE,
             payload: data,
          });
       });
    };
 };

/* (fav) => {
    return {type: ADD_PERSONAJE, payload: fav}
} */

export const removePersonaje = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_PERSONAJE,
             payload: data,
       });
       });
    };
 }; 

/* (id) => {
    return {type: REMOVE_PERSONAJE, payload: id}
} */

export const filterCards = (gender) =>{
    return {type: FILTER, payload: gender}
}

export const orderCards = (id) =>{
    return {type: ORDER, payload: id}
}
