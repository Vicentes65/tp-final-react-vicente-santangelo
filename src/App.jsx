import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pokemons" element={<PokemonList />} />
                        <Route path="/pokemon/:idOrName" element={<PokemonDetail />} />
                    </Routes>
                </Layout>
            </Router>
        </Provider>
    );
};

export default App;