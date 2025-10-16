import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/slices/favoritesSlice';

const useFavorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.items);

    const isFavorite = (pokemonId) => {
        return favorites.includes(pokemonId);
    };

    const toggleFavorite = (pokemonId) => {
        if (isFavorite(pokemonId)) {
            dispatch(removeFavorite(pokemonId));
        } else {
            dispatch(addFavorite(pokemonId));
        }
    };

    return {
        favorites,
        isFavorite,
        toggleFavorite,
    };
};

export default useFavorites;