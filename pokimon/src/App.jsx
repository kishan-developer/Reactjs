import React, { useEffect, useState } from 'react';
import PokemonContext from './constext/Pokemoncontext';


function App() {

  const [pokemon, pokemonSet] = useState(null)

  useEffect(() => {
    fetchdata('/db.json')
  },[])

  async function fetchdata(url){
    try{
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      pokemonSet(data);
    }catch (error){
      console.error('Error fetching data', error);
    }
  }


  // useEffect() 
  if(!pokemon){
    return <h1>Loading...</h1>
  }


  return (
    <PokemonContext.Provider value={{pokemon, pokemonSet}}> 
    {/* this data now access all this child */}

      <div>
        <h1>Pokemon Search</h1>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
