import React, { useState } from 'react'
import Pokemon from './Pokemon.jsx'


const App = () => {

  const API_BASE = 'https://pokeapi.co/api/v2/pokemon/'

  const [pokemonData, setPokemonData] = useState(null);
  const [searchedPokemon, setSearchedPokemon] = useState('')
  const [error, setError] = useState(null)

  const fetchPokemon = async (e) => {
    e.preventDefault()
    try {

      const fetchData = await fetch(API_BASE + searchedPokemon)
      const json = await fetchData.json()
      setPokemonData(json)
      
    } catch (err) {
      console.error(err)
      setError("pokemon does not exist")

    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-1/2 h-screen text-sm md:text-lg lg:text-xl bg-gray-100 overflow-hidden'>
      <div className='relative w-1/4 min-h-3/4 bg-gray-300 min-w-1/2 shadow-lg border-4  border-gray-800'>
        <form className='absolute top-3/4 left-1/2 transform -translate-x-2/4 min-w-1/4 w-1/2 h-12 p-1 bg-gray-400 z-2 border-3 border-gray-800 font-bold font-mono text-xl text-gray-200' 
              onSubmit={fetchPokemon}>
          <div className='flex justify-between w-full'> {/* Add flex container */}
            <input className='z-3 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 flex-grow' 
                   type="text"
                   value={searchedPokemon}
                   onChange={e => setSearchedPokemon(e.target.value)}
                   placeholder="Search Pokémon..."
            />
            <input className='absolute min-w-1/2 left-1/2 transform -translate-x-2/4 -bottom-20 cursor-pointer p-2 ml-2 bg-gray-400 rounded-md hover:bg-green-900 transition duration-200 overflow-hidden' 
                   type="submit" 
                   value="Search"
            />
          </div>
        </form>
      </div>
      <div className='absolute min-w-1/4 min-h-70 top-1/3 left-1/2 transform -translate-x-2/4 bg-gray-600 border-2 border-gray-200 z-4 shadow-lg text-sm md:text-lg lg:text-xl overflow-hidden'>
        <div>
          {error ? <div>{error}</div> : <Pokemon pokemon={pokemonData} />}
        </div>
      </div>
    </div>
  );

}

export default App