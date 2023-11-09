import React, { useState, createContext } from 'react';

// Create the context and export it
export const PokemonContext = createContext();

// Create a provider component and export it
export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const selectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <PokemonContext.Provider value={{ selectedPokemon, selectPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
