import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons, selectHasMore } from '../store/slices/pokemonSlice';
import PokemonCard from '../components/PokemonCard';
import './PokemonList.css';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const loading = useSelector((state) => state.pokemon.loading);
  const error = useSelector((state) => state.pokemon.error);
  const hasMore = useSelector(selectHasMore);

  const [page, setPage] = useState(1);
  const limit = 20; // ajusta si querés más por página

  useEffect(() => {
    dispatch(fetchPokemons({ page, limit }));
  }, [dispatch, page, limit]);

  const loadMore = () => {
    if (!loading && hasMore) setPage((p) => p + 1);
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <section>
      {pokemons.length === 0 && loading && <div>Loading...</div>}
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        {hasMore ? (
          <button className="button" onClick={loadMore} disabled={loading}>
            {loading ? 'Cargando...' : 'Cargar más'}
          </button>
        ) : (
          <span>No hay más resultados</span>
        )}
      </div>
    </section>
  );
};

export default PokemonList;