import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite, selectFavorites } from '../store/slices/favoritesSlice'

const FavoriteButton = ({ pokemon }) => {
  const dispatch = useDispatch()
  const favorites = useSelector(selectFavorites)
  const isFav = favorites.some((p) => p.id === pokemon.id)

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(toggleFavorite(pokemon))
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      className={`fav-btn ${isFav ? 'is-fav' : ''}`}
      title={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    >
      {isFav ? '❤️' : '🤍'}
    </button>
  )
}

export default FavoriteButton