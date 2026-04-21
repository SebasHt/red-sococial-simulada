import { NavLink } from "react-router-dom";
import './navbar.css'

export default function Navbars() {
  return (
<div className="navbar">
      <ul className="navbarLista">
        <li className="listas">
          <NavLink   to="/" className={({ isActive }) =>isActive ? "w3-red w3-bar-item w3-button  w3-mobile " : "w3-bar-item w3-button  w3-mobile "}>Home</NavLink>
        </li>
        <li className="listas">
          <NavLink   to="#" className={({ isActive }) =>isActive ? "w3-red w3-bar-item w3-button  w3-mobile " : "w3-bar-item w3-button  w3-mobile "}> Notificaciones</NavLink>
        </li>
        <li className="listas-A">
          <NavLink   to="/ajustes"className={({ isActive }) => isActive ? "w3-red w3-bar-item w3-button  w3-mobile " : "w3-bar-item w3-button  w3-mobile "}> Cuenta </NavLink>
        </li>
      </ul>
    </div>
  )
}

