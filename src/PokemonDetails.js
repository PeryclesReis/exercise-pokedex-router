import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PokemonDetails.css';

class PokemonDetails extends Component {
  render() {
    const { match, pokemons } = this.props;
    const idNumber = parseInt(match.params.id);
    const pokemon = pokemons.find((pokemon) => (
      pokemon.id === idNumber
    ));

    const { name, type, image, averageWeight, foundAt } = pokemon;

    const found = foundAt.map((found) => (
      <div>
        {found.location}
        <img src={found.map} alt={found.location} />
      </div>
    ));

    return(
      <div>
        <Link to="/">Home</Link>
        <div className="pokemon-datails">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
        <div>
          <strong>Sumário</strong>
          <div>
            {found}
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
