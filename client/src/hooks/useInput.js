import {useState} from 'react';

export const useInput = (soccerPlayers) => {


    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([])


    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    const formSubmit = event => {
        event.preventDefault();
        const results = soccerPlayers.filter(item => item.name.toLowerCase().includes(searchTerm))
        setSearchResults(results)
    }


    return [handleChange, searchResults, formSubmit]
}