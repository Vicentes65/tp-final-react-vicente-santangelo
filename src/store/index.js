import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './slices/pokemonSlice'
import favoritesReducer from './slices/favoritesSlice'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    favorites: favoritesReducer,
  },
})

export default store