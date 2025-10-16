import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonList } from '../../services/pokeapi';

const artwork = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchList',
  async ({ page = 1, limit = 20 } = {}) => {
    const data = await getPokemonList(page, limit);
    const mapped = data.results.map((item) => {
      const match = item.url.match(/\/pokemon\/(\d+)\/?$/);
      const id = match ? Number(match[1]) : item.name;
      return { id, name: item.name, image: artwork(id) };
    });
    return mapped;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: { pokemons: [], loading: false, error: null, page: 1, hasMore: true },
  reducers: {
    resetList: (state) => {
      state.pokemons = [];
      state.page = 1;
      state.hasMore = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        const { page = 1, limit = 20 } = action.meta.arg || {};
        if (page <= 1) {
          state.pokemons = action.payload;
        } else {
          state.pokemons = [...state.pokemons, ...action.payload];
        }
        state.page = page;
        state.hasMore = action.payload.length >= limit;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al cargar pokémon';
      });
  },
});

export const { resetList } = pokemonSlice.actions;
export const selectHasMore = (state) => state.pokemon.hasMore;
export const selectPage = (state) => state.pokemon.page;
export default pokemonSlice.reducer;