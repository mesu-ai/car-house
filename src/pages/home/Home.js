import React from 'react';
import Activity from '../../components/shared/activity/Activity';
import Navbar from '../../components/shared/Navbar';
import BannerInfoCard from './bannerinfocard/BannerInfoCard';
import CustomerReview from './customerReview/CustomerReview';
import Guideline from './guideline/Guideline';
import Banner from './homebanner/Banner';
import TopDeals from './topdeals/TopDeals';

const Home = () => {
    return (
        <div>
            <Activity></Activity>
            <Navbar></Navbar>
            <Banner></Banner>
            <BannerInfoCard></BannerInfoCard>
            <TopDeals></TopDeals>
            <Guideline></Guideline>
            <CustomerReview></CustomerReview>
            
        </div>
    );
};

export default Home;