import React from 'react';
import Advertisement from './Advertisement';
import Banner from './Banner';
import Categories from './Categories';
import Delivery from './Delivery';
import Process from './Process';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <Categories></Categories>
            <Process></Process>
            <Delivery></Delivery>
        </div>
    );
};

export default Home;