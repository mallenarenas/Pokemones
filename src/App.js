import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home" 
import SearchPokemon from "./views/SearchPokemon" 
import DetailsPokemon from "./views/DetailsPokemon" 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/pokemones" element={<SearchPokemon />}/>
          <Route path="/pokemones/:name" element={<DetailsPokemon />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
