import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import { AppContainer } from './components/Styles';

const App = () => {
  
  return (
    <AppContainer>
      <h1 className="Header">React Wars</h1>
      <CharacterList />
    </AppContainer>
  );
}

export default App;
