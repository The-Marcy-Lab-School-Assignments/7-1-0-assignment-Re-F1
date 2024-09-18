import { useState } from "react"
import handleFetch from "../utils/handleFetch"
import pokemonContext from "../context/PokemonContext"
import { useContext } from "react"


const PokemonForm = () => {
    const [name, setName] = useState('')
    const [hp, setHp] = useState('')
    const [frontURL, setFrontURL] = useState('')
    const [backURL, setBackURL] = useState('')
    
    const {allPokemon, setAllPokemon} = useContext(pokemonContext)

    const formSubmit = async (e) => {
        e.preventDefault();
        console.log(name,hp,frontURL,backURL)

       // information we need for this request - 
        const options = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({name, hp, front: frontURL, back: backURL})
        }
        const [data, error] = await handleFetch('http://localhost:4000/pokemon', options);
        if(data) setAllPokemon([...allPokemon, data])
    }

    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form" onSubmit={formSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="field ui fluid">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="HP" value={hp} onChange={(e) => setHp(e.target.value)}/>
                    </div>

                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="front" placeholder="url" value={frontURL} onChange={(e) => setFrontURL(e.target.value)}/>
                    </div>

                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input type="text" name="back" placeholder="url" value={backURL} onChange={(e) => setBackURL(e.target.value)}/>
                    </div>

                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PokemonForm
