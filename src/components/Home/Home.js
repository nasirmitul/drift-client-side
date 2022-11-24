import React from 'react';
import Advertisement from './Advertisement';
import Banner from './Banner';
import Categories from './Categories';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <Categories></Categories>
            <h1>Home</h1>
        </div>
    );
};

export default Home;