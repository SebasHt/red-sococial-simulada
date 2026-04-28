import { NavLink } from "react-router-dom";
import './css/navbar.css';

export default function Navbars({ user, onlogout }) {
  return (
    <div className="navbar">
      <ul className="navbarLista">

        <li className="listas">
          <NavLink 
            to="/home" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Home
          </NavLink>
        </li>

        <li className="listas">
          <NavLink 
            to="/chat" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Notificaciones
          </NavLink>
        </li>

        <li className="listas-A">
          <button onClick={onlogout} className="nav-link">LogOut</button>
        </li>

        <li className="listas-A">
          <NavLink 
            to="/ajustes" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Ajuste
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

