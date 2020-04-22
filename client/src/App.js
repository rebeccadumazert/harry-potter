import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';
import Houses from './components/Houses';
import Spells from './components/Spells';
import { Header } from './components/Header';
import HouseDetail from './components/HouseDetail';
import { AppContent, CharactersCard } from './components/styles/App';
import './components/styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <AppContent>
        <Route path="/" component={Header}></Route>
        <CharactersCard>
          <Route path="/character/" component={Characters}></Route>
          <Route path="/character/:id" component={CharacterDetails}></Route>
        </CharactersCard>
        <Route path="/houses" component={Houses}></Route>
        <Route path="/houses/:id" component={HouseDetail}></Route>
        <Route path="/spells" component={Spells}></Route>
      </AppContent>
    </BrowserRouter>
  );
}

export default App;
