import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import BeerPage from './Components/Beer/BeerPage';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={HomePage}/>
      <Route path='/beer/:id' component={BeerPage}/>
    </BrowserRouter>
  );
}

export default App;
