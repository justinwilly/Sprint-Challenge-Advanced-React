import React from 'react';
import { useInput } from '../hooks/useInput';
import "../App";
import "../App.css";

const Search = (props) => {

    let soccerPlayers = props.soccerData
    const [handleChange, searchResults, formSubmit, searchTerm] = useInput(soccerPlayers)

    return(
        <div>
            <div>
            <form onSubmit={formSubmit}>
                <input 
                        id="search"
                        type="text"
                        name="textfield"
                        placeholder="Looking for a player?"
                        value={searchTerm}
                        onChange={handleChange}
                />
                <button>Search</button>
            </form>

                <div>
                        {
                        searchResults.map(item => {
                            return (
                            <div key={item.id} className="search-results">
                                <p>{item.name}</p>
                                <p>{item.country}</p>
                            </div>
                            )
                        })
                }
                </div>
            </div>
        <div className="soccer-players">
            {soccerPlayers.map(item => {
                return(
                        <div className="soccer-player" key={item.id}>
                            <p className="player"> ⚽️ {item.name} ⚽️</p>
                            <p className="country">{item.country}</p>
                        </div>
                )
            })} 

        </div>
    </div>
    )
}

export default Search