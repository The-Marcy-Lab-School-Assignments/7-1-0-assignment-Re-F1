import PokemonCard from './PokemonCard';
import { useContext } from 'react';
import pokemonContext from '../context/PokemonContext';

// TODO: import the PokemonContext and useContext

const PokemonCollection = () => {

    // TODO: Replace this to get the pokemon from PokemonContext
    // const allPokemon = [];
    
    const {allPokemon, userInput} = useContext(pokemonContext)


    return (
        <div className="ui six cards">
            {allPokemon?.filter((pokemon => pokemon.name.includes(userInput))).map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
            
            {/* key is for react to pass as an id, passing through it as a whole */}
            {/* pokemon name and detail using drilling */}
        </div>
    )
}

export default PokemonCollection