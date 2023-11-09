'use client'
import { PokemonProvider } from "../pokemon-context";
import PokemonCard from "./pokemon-card";

export default function PokemonContextExample() {

  const pokemons = [
    {
      id: 0,
      name: 'Pikachu',
      src: 'https://img.pokemondb.net/artwork/large/pikachu.jpg',
      type: 'Electric',
      move: 'Thunderbolt',
      canMegaEvolve: false
    },
    {
      id: 1,
      name: 'Charizard',
      src: 'https://img.pokemondb.net/artwork/avif/charizard.avif',
      type: 'Fire/Flying',
      move: 'Flamethrower',
      canMegaEvolve: true
    },
    {
      id: 2,
      name: 'Bulbasaur',
      src: 'https://img.pokemondb.net/artwork/avif/bulbasaur.avif',
      type: 'Grass/Poison',
      move: 'Vine Whip',
      canMegaEvolve: false
    },
    {
      id: 3,
      name: 'Squirtle',
      src: 'https://img.pokemondb.net/artwork/avif/squirtle.avif',
      type: 'Water',
      move: 'Water Gun',
      canMegaEvolve: false
    },
    {
      id: 4,
      name: 'Jigglypuff',
      src: 'https://img.pokemondb.net/artwork/avif/jigglypuff.avif',
      type: 'Normal/Fairy',
      move: 'Sing',
      canMegaEvolve: false
    }
    // Add more Pokémon objects as needed
  ]

  return (
    <PokemonProvider>
      <div>
        <h1 classname="mx-4 my-8 text-4xl font-bold">notable pokémon</h1>
        <div className="flex">
          {
            pokemons.map(function ({ name, src, type, move }) {
              return (
                <PokemonCard
                  name={name}
                  src={src}
                  type={type}
                  move={move}
                />
              )
            })
          }</div>
      </div>
    </PokemonProvider>
  )
}
