import { createSlice } from '@reduxjs/toolkit'

const STORAGE_KEY = 'favorites'

const loadFavorites = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const data = JSON.parse(raw)
    return Array.isArray(data) ? data : []
  } catch (e) {
    console.warn('Favoritos inválidos. Reiniciando.', e)
    localStorage.removeItem(STORAGE_KEY)
    return []
  }
}

const initialState = { items: loadFavorites() }

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const poke = action.payload
      const exists = state.items.find((p) => p.id === poke.id)
      if (exists) {
        state.items = state.items.filter((p) => p.id !== poke.id)
      } else {
        state.items.push({ id: poke.id, name: poke.name, image: poke.image })
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    },
    clearFavorites: (state) => {
      state.items = []
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    },
  },
})

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions
export const selectFavorites = (state) => state.favorites.items
export const selectIsFavorite = (id) => (state) =>
  state.favorites.items.some((p) => p.id === id)
export default favoritesSlice.reducer