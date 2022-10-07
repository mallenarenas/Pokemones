import { useState, useEffect} from 'react'

const Home = () => {
    const [mainImage, setMainImage] = useState("")
    useEffect(() => {
        consultApi();
     }, [])
 
     const consultApi = async () => {
         const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
         const  pikaData = await response.json();
         if(response && pikaData){
         setMainImage(pikaData.sprites.other.dream_world.front_default)   
         }     
      }
  return (
    <div className ="container">
    <h1 className = "titleView">Bienvenido maestro Pokemon</h1>
    <img className="mainImage" src={mainImage} alt="" />
    </div>
  )
}

export default Home