import { ADD_PERSONAJE, FILTER, REMOVE_PERSONAJE, ORDER } from "./actions-types";


// estado inicial
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  //recibe el estado que modifica y la accion
  switch (action.type) {
    case ADD_PERSONAJE: 
      /* return { ...state, allCharacters: [...state.allCharacters, action.payload],
      myFavorites:[...state.allCharacters, action.payload] }; */ /// este caso para agregar un personaje
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    case REMOVE_PERSONAJE :
      return { ...state, myFavorites: action.payload };
      /* return {
        ...state,
        myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload),
      }; */ // para quitar un personaje

    case FILTER:
      const filterGender = [...state.allCharacters].filter(fav => fav.gender === action.payload)
      return {
        ...state,
        myFavorites: filterGender
      }
    
      case ORDER:
        const orderId = [...state.allCharacters].sort((a,b) =>{
          if (a.id > b.id){
            return action.payload === 'Ascendente' ? 1:-1
          }else if (a.id < b.id){
            return action.payload === 'Descendente' ? 1:-1
        }else {
          return 0
        }
      })
      return {
        ...state,
        myFavorites: orderId
      }

    

    

    default:
      return { ...state }; //devuelve una copia del estado
  }
};

export default rootReducer;
