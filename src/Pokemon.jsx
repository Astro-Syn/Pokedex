import React from 'react'

const Pokemon = ({pokemon}) => {

    if(pokemon === null) return
    const name = pokemon.name
    const image = pokemon.sprites.front_default
    const types = pokemon.types.map(el => el.type.name)
    const typesString = types.join(', ')

  return (
    <div>
          <div className=''>
            <div className='absolute top-10 left-1/2 -translate-x-2/4 text-sm md:text-lg lg:text-xl'>
                <div className='relative font-mono p-2 overflow-hidden text-sm md:text-lg lg:text-xl'>{name}</div>
                <img className='relative w-full h-full overflow-hidden ' src={image} alt='Pokemon'/>
                <div className='relative font-mono overflow-hidden text-sm md:text-lg lg:text-xl'>{typesString}</div>
              </div>
          </div>
      
    </div>
  
    
  )
}

export default Pokemon