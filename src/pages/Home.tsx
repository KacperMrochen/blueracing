import React from 'react';
import Hero from '../Components/Hero';
//import Kart from '../Components/Kart';
import '../Styles/Home.css';
import Section from '../Components/Section';
//import Carousel from '../Components/Carousel';

const Home = ({...posts}) => {

    return (
        <div className='home'>
            <Section><Hero {...posts[0]}/></Section>
            {/**
             * <Section><Carousel/></Section>
             */}
        </div>
    )
}

export default Home;