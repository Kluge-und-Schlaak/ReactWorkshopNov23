import React, { useContext } from 'react';
import { PokemonContext } from './pokemon-context';

export default function PokemonCard({ canMegaEvolve = false, name, src, type, move }) {
  const { selectedPokemon, selectPokemon } = useContext(PokemonContext);
  
  // Check if this card is for the selected Pokemon
  const isSelected = selectedPokemon?.name === name;

  // Function to handle selecting this Pokemon
  const handleSelect = () => {
    selectPokemon({ name: name });
  };

  return (
    <section className={`profile p-4 m-4 w-64 ${isSelected ? 'border-4 border-blue-500' : ''}`}>
      <h2 className="text-3xl font-bold">{name}</h2>
      <img
        className={`avatar py-4 ${isSelected ? 'ring-2 ring-blue-300' : ''}`}
        src={src}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b className="text-blue-500 font-black">Type: </b>
          {type}
        </li>
        <li>
          <b className="text-blue-500 font-black">Special Move: </b>
          {move}
        </li>
        <li>
          <b className="text-blue-500 font-black">Mega Evolve: </b>
          {canMegaEvolve ? '✅' : '❌'}
        </li>
      </ul>
      <button 
        onClick={handleSelect} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
      >
        Select
      </button>
    </section>
  );
}
