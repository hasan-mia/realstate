import React from 'react';
import Product from '../components/Product';
import Search from '../components/Search';

const Home = () => {
    return (
        <main>
            <Search></Search>
            <Product></Product>
        </main>
    );
};

export default Home;