import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const DetailsPokemon = () => {

    const [image, setImage] = useState([]);
    const [stats, setStats] = useState([]);
    const [types, setTypes] = useState([]);

    const { name } = useParams();

    useEffect(() => {
        const getAPI = async () => {
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const datos = await resp.json();
            if(resp && datos){
            setImage(datos.sprites.other["official-artwork"].front_default)
            setStats(datos.stats)
            setTypes(datos.types)
            } 
        }
        getAPI()
    }, [name])

    
    //src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${character.id}.png`}
  return (
    <div className="container2">
        
        <Card style={{ width: '18rem' }}>
            <Card.Body> <h3>{name} </h3></Card.Body>
            <Card.Img variant="bottom" src = {image} alt="" />
        </Card>
        <Card style={{ width: '18rem' }}>
            {types.map((t) => (<h3 key= {t.slot}>Type: {t.type.name} </h3>)  )}
            <ul>{stats.map((s) => (
                <li key = {s.stat.name}>{s.stat.name}: {s.base_stat}</li>
                ))}
            </ul>
            
           
        </Card>
            
    </div>
  )
}

export default DetailsPokemon