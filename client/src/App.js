import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { StrictMode, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./view/About/About";
import Detail from "./view/Detail/Detail";
import NotFound from "./components/NotFound/NotFound";
import Formulario from "./components/Form/Form";
import { useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";



function App() {
  const [characters, setCharacters] = useState([]);
// FUNCION CON PROMESA
  /* const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const idExists = characters.some((char) => char.id === data.id); // utilizamos some
          if (idExists) {
            window.alert("El ID ya existe en la lista de personajes");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }; */

  // FUNCION CON ASYNC AWAIT 
  async function onSearch(id) {
    try {
      const response = await fetch(`http://localhost:3001/rickandmorty/character/${id}`);
      const data = await response.json();
      if (data.name) {
        const idExists = characters.some((char) => char.id === data.id); // utilizamos some
        if (idExists) {
          window.alert("El ID ya existe en la lista de personajes");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("No hay personajes con ese ID");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClose = (id) => {
    const filtrar = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(filtrar);
  };
  const onRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 825) + 1; // generar un id aleatorio entre 1 y 108
    fetch(`http://localhost:3001/rickandmorty/character/${randomId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const idExists = characters.some((char) => char.id === data.id);
          if (idExists) {
            window.alert("El ID ya existe en la lista de personajes");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No se pudo obtener un personaje aleatorio");
        }
      });
  };
  const location = useLocation();

  // Verifica si la ruta actual es "/" y oculta el componente Nav
  const hideNav = location.pathname === "/";

  const navigate = useNavigate();
  const [access, setAccess] = useState();
  /* const username = "cristian84molina@gmail.com";
  const password = "1password";

  // FUNCION ORIGINAL
  function login( ) {
    if (userData.password === password && userData.email === username) {
      setAccess(true);
      navigate("/home");
    }
  } */
// FUNCION CON PROMESAS
/*   function login  (userData)  {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const  access  = data;
       console.log(data)
       setAccess(data);
       access && navigate('/home');
    });
 } */
 // FUNCION CON ASYNC AWAIT
 async function login (userData) {
  try {
    const { email, password } = userData;
    const response = await axios.get('http://localhost:3001/rickandmorty/login/', {
      params: { email, password }
    });
    const access = response.data;
    
    setAccess(access);
    access && navigate('/home');
  } catch (error) {
    console.error(error);
  }
}

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <StrictMode>
      <div className="App" style={{ padding: "40px" }}>
        {!hideNav && (
          <Nav onSearch={onSearch} onRandomCharacter={onRandomCharacter} />
        )}

        <Routes>
          <Route path="/favorites" element={<Favorites />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<Formulario login={login} />} />
         

          <Route path="/about" element={<About />} />

          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />

          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </StrictMode>
  );
}

export default App;
