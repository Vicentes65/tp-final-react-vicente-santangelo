import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonByNameOrId } from '../services/pokeapi';
import FavoriteButton from '../components/FavoriteButton';
import './PokemonDetail.css';

const artwork = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const PokemonDetail = () => {
  const { idOrName } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    getPokemonByNameOrId(idOrName)
      .then((json) => active && setData(json))
      .catch((e) => active && setError(e.message || 'Error'))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [idOrName]);

  const pokemon = useMemo(() => {
    if (!data) return null;
    const id = data.id;
    return {
      id,
      name: data.name,
      image: artwork(id),
      types: data.types?.map((t) => t.type.name) || [],
      abilities: data.abilities?.map((a) => a.ability.name) || [],
      weight: data.weight,
      height: data.height,
    };
  }, [data]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!pokemon) return null;

  return (
    <section className="detail">
      <div className="detail-media">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="detail-body">
        <h1 className="capitalize">{pokemon.name}</h1>
        <FavoriteButton pokemon={pokemon} />
        <ul className="meta">
          <li><strong>Tipos:</strong> {pokemon.types.join(', ')}</li>
          <li><strong>Habilidades:</strong> {pokemon.abilities.join(', ')}</li>
          <li><strong>Peso:</strong> {pokemon.weight}</li>
          <li><strong>Altura:</strong> {pokemon.height}</li>
        </ul>
      </div>
    </section>
  );
};

export default PokemonDetail;