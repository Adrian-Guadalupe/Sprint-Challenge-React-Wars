import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { CardContainer } from './Styles';

const CharacterList = () => {
   const [charArr, setCharArr] = useState([]);

   useEffect (() => {
      axios
         .get('https://swapi.co/api/people/')
         .then(response => {
            console.log(response.data.results);
            setCharArr(response.data.results);
         })
         .catch(error => console.log(error));
   }, []);

   return (
      <CardContainer>
         {charArr.map(charObj => {
            return <CharacterCard character={charObj} key={charObj.created} />
         })}
      </CardContainer>
   )
};

export default CharacterList;