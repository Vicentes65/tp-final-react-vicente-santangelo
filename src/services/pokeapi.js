const API_BASE = 'https://pokeapi.co/api/v2';

export async function getPokemonList(page = 1, limit = 20) {
  const offset = (page - 1) * limit;
  const res = await fetch(`${API_BASE}/pokemon?offset=${offset}&limit=${limit}`);
  if (!res.ok) throw new Error(`Error listando pokémon: ${res.status}`);
  return res.json();
}

export async function getPokemonByNameOrId(idOrName) {
  const res = await fetch(`${API_BASE}/pokemon/${idOrName}`);
  if (!res.ok) throw new Error(`Pokémon no encontrado: ${idOrName}`);
  return res.json();
}