import React from 'react';
import Banner from '../Header/Banner/Banner';
import Doctors from './Doctors/Doctors';
import Gallaries from './Gallary/Gallaries';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Gallaries></Gallaries>

        </div>
    );
};

export default Home;