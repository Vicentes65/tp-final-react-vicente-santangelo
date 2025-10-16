import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => (
  <header className="nav">
    <nav className="nav-inner">
      <div className="brand">PokeApp</div>
      <div className="links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/pokemons">Pokémon</NavLink>
      </div>
    </nav>
  </header>
)

export default Navbar