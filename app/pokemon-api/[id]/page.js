'use client'
import { useEffect, useState } from 'react'

export default function PokemonDetailPage({ params }) {
  const { id } = params
  const [pokemonDetails, setPokemonDetails] = useState(null)

  useEffect(() => {
    if (id) {
      const fetchPokemonDetails = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        setPokemonDetails(data)
      }

      fetchPokemonDetails()
    }
  }, [id])

  if (!pokemonDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    )
  }

  // Function to render abilities
  const renderAbilities = (abilities) => {
    return abilities.map((abilityItem) => (
      <li key={abilityItem.ability.name} className="capitalize">
        {abilityItem.ability.name} (Hidden:{' '}
        {abilityItem.is_hidden ? 'Yes' : 'No'})
      </li>
    ))
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl leading-6 my-4 font-medium text-gray-900 capitalize">
            {pokemonDetails.name}
          </h1>
          <img src={pokemonDetails.sprites.front_default} />
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Base Experience: {pokemonDetails.base_experience}
          </p>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Height: {pokemonDetails.height}
          </p>
        </div>
      </div>
    </div>
  )
}
