import { useEffect, useState } from "react";
import pokemonContext from "./PokemonContext";
import handleFetch from '../utils/handleFetch';

// TODO: Import the PokemonContext

// const starterPokemon is there just so you can see an example behind
const starterPokemon = [
    {
        id: 0,
        name: "butterfree 1",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 1,
        name: "butterfree 2",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 2,
        name: "butterfree 3",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    }
]

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState(starterPokemon);
    const [userInput, setUserInput] = useState('')
    useEffect(() => {
        const doFetch = async () => {
            const[data,error] = await handleFetch("http://localhost:4000/pokemon");
            if(data) setAllPokemon(data)
        }
        doFetch()
    }, [])

    console.log(allPokemon)
    // TODO: use useEffect to fetch data from the local JSON server (remember to start JSON server!)

    // TODO: Add values to be included in the context here
    // Pass in the conyext values
    let contextValues = {
        allPokemon, setAllPokemon, userInput, setUserInput
    }

    // TODO: Wrap the {children} in the PokemonContext.Provider and provide the values above
    return (
        // value the context is giving
        <pokemonContext.Provider value={contextValues}>
        { children }
        </pokemonContext.Provider>
    )
}

export default PokemonProvider;