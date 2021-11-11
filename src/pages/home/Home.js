import React from 'react';
import BannerInfoCard from './bannerinfocard/BannerInfoCard';
import CustomerReview from './customerReview/CustomerReview';
import Banner from './homebanner/Banner';
import TopDeals from './topdeals/TopDeals';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <BannerInfoCard></BannerInfoCard>
            <TopDeals></TopDeals>
            <CustomerReview></CustomerReview>
            
        </div>
    );
};

export default Home;