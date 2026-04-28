import { NavLink } from "react-router-dom";
import './css/navbar.css'

export default function Navbars({user ,onlogout}) {''
  return (
<div className="navbar">
      <ul className="navbarLista">

        <li className="listas">
          <NavLink   to="/home" className={({ isActive }) =>isActive ? "w3-red w3-bar-item w3-button  w3-mobile " : "w3-bar-item w3-button  w3-mobile "}>Home</NavLink>
        </li>
        <li className="listas">
          <NavLink   to="#" className={({ isActive }) =>isActive ? "w3-red w3-bar-item w3-button  w3-mobile " : "w3-bar-item w3-button  w3-mobile "}> Notificaciones</NavLink>
        </li>
        
        <li></li>

        <li></li>

        <li></li>

        <li className="listas-A">
            <a class="nav-link" ><span className="btn btn-danger" onClick={onlogout}></span></a>
        </li>

        <li className="listas-A">
          <NavLink   to="/ajustes"className={({ isActive }) => isActive ? "w3-red w3-bar-item w3-button  w3-mobile " : "w3-bar-item w3-button  w3-mobile "}> Cuenta </NavLink>
        </li>

      </ul>
    </div>
  )
}

