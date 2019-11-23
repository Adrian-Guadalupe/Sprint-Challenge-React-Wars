import React from 'react';

const Stats = ({ character }) => {
   return (
      <div className='stats'>
            <p>Born: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Skin: {character.skin_color}</p>
            <p>Hair: {character.hair_color}</p>
            <p>Eyes: {character.eye_color}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
         </div>
   );
};          

export default Stats;