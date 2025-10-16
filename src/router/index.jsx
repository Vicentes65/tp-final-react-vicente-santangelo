import React from 'react'
import { createHashRouter } from 'react-router-dom'
import Layout from '../components/common/Layout'
import Home from '../pages/Home'
import PokemonList from '../pages/PokemonList'
import PokemonDetail from '../pages/PokemonDetail'

export const router = createHashRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'pokemons', element: <PokemonList /> },
        { path: 'pokemon/:idOrName', element: <PokemonDetail /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
)