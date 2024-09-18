// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon
import { useContext } from "react"
import pokemonContext from "../context/PokemonContext"

const Filter = () => {
    const {userInput, setUserInput} = useContext(pokemonContext)
    return (
        <div className="ui search">
            <div className="ui icon input">
                {/* This input we are taking in the ; grabs the current value of the search bar and we are setting userInput to it*/}
                <input className="prompt" placeholder="Search by Name..." value = {userInput} onChange={(e) => setUserInput(e.target.value)}/>

                <i className="search icon" />
            </div>
        </div>
    )
}

export default Filter