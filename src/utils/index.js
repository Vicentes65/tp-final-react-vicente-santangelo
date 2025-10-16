export const formatPokemonName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
};

export const getPokemonImageUrl = (id) => {
    return `https://pokeapi.co/api/v2/pokemon/${id}/`;
};