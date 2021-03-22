import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NoFound from './NoFound';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            <Pokedex pokemons={pokemons} />
            )}
          />
          <Route
            path="/pokemon-details/:id"
            render={(props) => (
              <PokemonDetails
                {...props}
                pokemons={pokemons}
              />
            )}
          />
          <Route path="/about" component={About} />
          <Route component={NoFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
