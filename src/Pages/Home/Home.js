import React from 'react';
import BigCollection from '../BigCollection/BigCollection';
import HeroSection from '../HeroSection/HeroSection';
import Header from '../Navbar/Header';
import ReasonsToBuyaKnittedToy from '../ReasonsToBuyaKnittedToy/ReasonsToBuyaKnittedToy';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeroSection></HeroSection>
            <ReasonsToBuyaKnittedToy></ReasonsToBuyaKnittedToy>
            <BigCollection></BigCollection>
        </div>
    );
};

export default Home;