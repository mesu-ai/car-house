import React from 'react';
import BannerInfoCard from './bannerinfocard/BannerInfoCard';
import CustomerReview from './customerReview/CustomerReview';
import Guideline from './guideline/Guideline';
import Banner from './homebanner/Banner';
import TopDeals from './topdeals/TopDeals';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <BannerInfoCard></BannerInfoCard>
            <TopDeals></TopDeals>
            <Guideline></Guideline>
            <CustomerReview></CustomerReview>
            
        </div>
    );
};

export default Home;