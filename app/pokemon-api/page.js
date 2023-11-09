'use client'
import { useEffect, useState } from "react";
import PokemonCard from "./pokemon-card";

export default function Gallery() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        // Fetch the list of Pokemon from the API
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();

        const pokemonDetails = [];

        // Loop over each Pokemon and fetch details
        for (const pokemon of data.results) {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonDetail = await pokemonResponse.json();
          pokemonDetails.push(pokemonDetail);
        }

        // Update state with the details fetched
        setPokemons(pokemonDetails);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchPokemons();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {pokemons.map((pokemon) => {
          // Assuming you want to display the image, type, and move in the PokemonCard
          // You will need to adjust the following code based on how your API returns this information
          const imageSrc = pokemon.sprites.front_default; // Or another sprite property
          const type = pokemon.types.map((typeInfo) => typeInfo.type.name).join('/');
          const move = pokemon.moves.length > 0 ? pokemon.moves[0].move.name : 'No move';

          return (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              src={imageSrc}
              type={type}
              move={move}
            />
          );
        })}
      </div>
    </div>
  );
}