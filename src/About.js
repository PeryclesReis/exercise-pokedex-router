import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <p>About Pokédex</p>
        <p>O Pokédex é um dispositivo portátil de enciclopédia eletrônica; aquele que é capaz de registrar e reter informações dos vários Pokémon do mundo. Para cumprir o objetivo do Professor Oak de um banco de dados Pokémon completo, o Pokédex foi projetado para encontrar e registrar dados sobre cada Pokémon que o Treinador encontra. Os Pokémon são adicionados ao Pokédex simplesmente ao encontrá-los na batalha ou, às vezes, ao ver uma foto do Pokémon. No entanto, as entradas detalhadas não são registradas até que o jogador pegue o Pokémon, receba-o como um prêmio / presente ou adquira-o em uma troca.</p>
        <img src="https://cdn.bulbagarden.net/upload/thumb/3/36/479Rotom-Pok%C3%A9dex.png/250px-479Rotom-Pok%C3%A9dex.png" alt="https://cdn.bulbagarden.net/upload/thumb/3/36/479Rotom-Pok%C3%A9dex.png/250px-479Rotom-Pok%C3%A9dex.png" />
      </div>
    );
  }
}

export default About;
