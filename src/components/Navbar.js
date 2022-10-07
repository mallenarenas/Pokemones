import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
return (
<div className="Navbar">
<img src = "../icons.png" alt="icono"/>   
<div>
<NavLink className={ setActiveClass } end to="/">
Home
</NavLink>
{" - "}
<NavLink className={ setActiveClass } to="/pokemones">
Pokemones
</NavLink>
</div>
</div>
);
}