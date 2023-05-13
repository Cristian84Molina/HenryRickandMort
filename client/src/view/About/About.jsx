import React from "react";
import style from "./About.module.css";
import htmlImg from './assets/html.png'
import cssImg from './assets/css.svg'
import javascriptImg from './assets/javascript.png'
import reactImg from './assets/react.png'
import redux from './assets/redux.png'



const techSkills = [{ tech: 'Html', image: htmlImg }, { tech: 'Css', image: cssImg }, { tech: 'JavaScript', image: javascriptImg }, { tech: 'React', image: reactImg }, { tech: 'Redux', image: redux }]

const About = () => {
  return (
    <div >
      <p className={style.portfolio}>
        Hola, mi nombre es Cristian Molina, tengo 39 años y actualmente estoy estudiando
        programación en Henry. Me encuentro en el Módulo 2 de la carrera y estoy
        emocionado por todo lo que estoy aprendiendo. Actualmente, estoy
        trabajando en un proyecto de desarrollo de aplicaciones web utilizando
        React, específicamente la creación de la aplicación de Rick and Morty.
        Desde siempre he tenido una gran pasión por la tecnología y la
        informática, lo que me llevó a iniciar mis estudios en este campo. Como
        estudiante, me considero una persona autodisciplinada y comprometida con
        el aprendizaje constante, lo que me motiva a seguir adelante y superar
        cualquier obstáculo que se presente en el camino. Estoy emocionado por
        seguir aprendiendo, creciendo y desarrollando mis habilidades como
        programador. Espero poder continuar explorando nuevas tecnologías y
        herramientas, y aplicar mis conocimientos para crear soluciones
        innovadoras y creativas en el mundo digital.
      </p>
      <ul className={style.unorderedList}>
        {techSkills.map(skill => (
          <li className={style.listItem} key={skill}>{skill.tech}<img src={skill.image} alt={skill.tech} /></li>
        ))}
      </ul>
    </div>
  );
};

export default About;

// agregar linkeding y instagram
