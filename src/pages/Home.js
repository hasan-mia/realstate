import React from 'react';
import Footer from '../components/Footer';
import Product from '../components/Product';
import Search from '../components/Search';
import Select from '../components/Select';

const Home = () => {
    return (
        <main>
            <Select></Select>
            <Search></Search>
            <Product></Product>
            <Footer></Footer>
        </main>
    );
};

export default Home;