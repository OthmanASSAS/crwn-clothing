import React from 'react';
// import './homepage.scss';
import Directory from '../../components/directory/Directory';

import { HomePageContainer } from './homePageStyles'

const HomePage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    );
};

export default HomePage;