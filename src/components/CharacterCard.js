import React from 'react';
import Stats from './Stats';
import { CardWrapper, NameTag, StatsWrapper } from './Styles';

const CharacterCard = ({ character }) => {

   return (
      <CardWrapper>
         <NameTag>{character.name}</NameTag>
         <StatsWrapper>
            <Stats character={character}/>
         </StatsWrapper>
      </CardWrapper>
   );
};

export default CharacterCard;