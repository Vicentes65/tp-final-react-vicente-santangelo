import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../store/slices/favoritesSlice'
import PokemonCard from '../components/PokemonCard'
import './Home.css'

const Home = () => {
  const favorites = useSelector(selectFavorites)

  return (
    <section className="home">
      <h1>Proyecto PokeAPI React</h1>
      <p>App con Vite + React + Redux Toolkit + React Router. Consume PokeAPI.</p>

      <h2>Pokémon favoritos</h2>
      {favorites.length === 0 ? (
        <p>Aún no agregaste favoritos. Desde el listado o el detalle, presioná el corazón.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((p) => (
            <PokemonCard key={p.id} pokemon={p} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Home