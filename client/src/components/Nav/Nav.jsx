import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import style from "./nav.module.css";

export default function Nav(props) {
  return (
    <div>
      <SearchBar
        onSearch={(character) => props.onSearch(character)}
        onRandomCharacter={(character) => props.onRandomCharacter(character)}
      />
      <div className={style.container}>
        <Link to="/About" className={styles["about-link"]}>About</Link>
        <Link to="/Home" className={styles["home-link"]}>Home</Link>
        <Link to="/favorites" className={styles["Favorites-link"]}>Favoritos</Link>
      </div>
    </div>
  );
}
