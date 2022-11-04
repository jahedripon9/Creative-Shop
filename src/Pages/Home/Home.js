import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Header from '../Navbar/Header';
import ReasonsToBuyaKnittedToy from '../ReasonsToBuyaKnittedToy/ReasonsToBuyaKnittedToy';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeroSection></HeroSection>
            <ReasonsToBuyaKnittedToy></ReasonsToBuyaKnittedToy>
        </div>
    );
};

export default Home;