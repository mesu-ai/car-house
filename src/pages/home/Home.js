import React from 'react';
import BannerInfoCard from './bannerinfocard/BannerInfoCard';
import Banner from './homebanner/Banner';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <BannerInfoCard></BannerInfoCard>
            
        </div>
    );
};

export default Home;