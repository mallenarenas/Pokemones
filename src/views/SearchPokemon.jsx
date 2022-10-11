import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const SearchPokemon = () => {

    const [pokeNames, setPokeNames] = useState([])
    const [name, setName] = useState("");

    const navigate = useNavigate()
    //consultar api
    useEffect(() => {
       consultApi();
    }, [])

    const consultApi = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000')
        const  pokedata = await response.json();
        if(response && pokedata){
        setPokeNames(pokedata.results) 
        }  
    }

    const selectPokemon = (event) => {
        const pokeName = event.target.value;
        if (pokeName && pokeName !== "") {
            setName(pokeName)
        }
    }
    const irAlPokemon = () => {
        navigate(`/pokemones/${name}`);
    }  

return (
    <div className="container">
        <h1 className="titleView">Selecciona un Pokemon</h1>
        <select onChange={selectPokemon}>
            <option value="">Pokemon</option>
            {pokeNames.map((pokeName) => (
            <option key={pokeName.url} value={pokeName.name}>{pokeName.name}</option>
            ))}
        </select>
        <Button className="button btn btn-dark" onClick={irAlPokemon}>Buscar Pokemon</Button>
    </div>
  )
}

export default SearchPokemon