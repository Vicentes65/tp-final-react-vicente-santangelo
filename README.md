# tp-final-react-[vicente-santangelo] · PokeAPI React App

Aplicación web con Vite + React que consume la PokeAPI para listar Pokémon, ver su detalle y gestionar favoritos (Redux Toolkit). Navegación con React Router y diseño responsive.

## Requisitos
- Node.js 18 o superior
- npm 9 o superior

Verificar:
```bash
node -v
npm -v
```

## Instalación
1. Clona el repositorio (reemplaza <tu_usuario> por tu usuario real de GitHub):
```bash
git clone https://github.com/<tu_usuario>/tp-final-react-[vicente-santangelo].git
```

2. Entra al proyecto e instala dependencias:
```bash
cd tp-final-react-[vicente-santangelo]
npm install
```

## Ejecución en desarrollo
```bash
npm run dev
```
Abre el navegador en la URL que muestra Vite, típicamente:
- http://localhost:5173

## Build de producción
```bash
npm run build
```
Previzualización local del build:
```bash
npm run serve
```
Por defecto servirá en:
- http://localhost:4173

## Despliegue en subcarpeta (/tp-final/)
- Este proyecto está configurado con:
  - Router con hash (createHashRouter) para evitar rewrites del servidor.
  - base de Vite: `/tp-final/` para que los assets funcionen desde la subcarpeta.
- Sube solo el contenido de la carpeta `dist/` al hosting, dentro de `public_html/tp-final/`:
  - public_html/tp-final/index.html
  - public_html/tp-final/assets/...

URL final: https://www.tudominio.com/tp-final/

## Estructura del proyecto
- src/
  - App.jsx
  - main.jsx
  - router/
    - index.jsx (definición de rutas con createHashRouter)
  - pages/
    - Home.jsx (info + favoritos)
    - PokemonList.jsx (listado con “Cargar más”)
    - PokemonDetail.jsx (detalle por id/nombre)
  - components/
    - common/
      - Layout.jsx (layout + Outlet)
      - Navbar.jsx (navegación)
    - PokemonCard.jsx (card reutilizable)
    - FavoriteButton.jsx (botón de favoritos)
  - store/
    - index.js (configureStore)
    - slices/
      - pokemonSlice.js (listado con paginación)
      - favoritesSlice.js (favoritos con persistencia)
  - services/
    - pokeapi.js (llamadas a PokeAPI con fetch)
  - styles/
    - globals.css (estilos base)
- vite.config.js (base '/tp-final/')
- index.html
- package.json

## Funcionalidades
- React Router DOM para navegación entre Home, Listado y Detalle.
- Consumo de PokeAPI (https://pokeapi.co/api/v2/pokemon).
- Listado de Pokémon con nombre e imagen (cards clickeables).
- Detalle con nombre, tipos, habilidades, peso, altura e imagen.
- Favoritos (Redux Toolkit + localStorage) y sección de favoritos en Home.
- Diseño responsive (grid + CSS).

## Licencia
MIT
