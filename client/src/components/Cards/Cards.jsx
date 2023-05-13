import Card from '../Card/Card';
import style from './cards.module.css'

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className = {style.container}>
      {characters.map((personaje) => {
        return (
          <Card 
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            image={personaje.image}
            onClose={()=>props.onClose(personaje.id)}
          />
        );
      })}
    </div>
  );
}
// en este componente agregamos card y pasamos por props
// cada personaje