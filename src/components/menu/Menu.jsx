import {React, useContext } from 'react'
import "./menu.css"
import { NavLink, useNavigate, Link } from 'react-router-dom'
import {UserContext} from '../../context/UserContext'

function Menu() {

  const navigate = useNavigate()
  const usuario = useContext(UserContext)

  return (
    <nav className='main-menu'>
        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/criptomonedas">Lista de Criptos</NavLink></li>
            <li><NavLink to="/perfil">Perfil de {usuario.name}</NavLink></li>
            <li><Link onClick={() => {
              localStorage.removeItem("tokenEDmarket") 
              navigate=("/login")
            }}>Cerrar Session</Link></li>
            
        </ul>
    </nav>
  )
}

export default Menu