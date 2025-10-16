import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => (
  <Link to={`/pokemon/${pokemon.id}`} className="card">
    <div className="card-media">
      <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
    </div>
    <div className="card-body">
      <h3 className="card-title">{pokemon.name}</h3>
      <FavoriteButton pokemon={pokemon} />
    </div>
  </Link>
);

export default PokemonCard;