import React from 'react';
import Hero from '../Components/Hero';
import Kart from '../Components/Kart';
import '../Styles/Home.css';
import Section from '../Components/Section';
import Carousel from '../Components/Carousel';

const Home = () => {

    const posts = [
        {
            id: 4,
            title: "Title 4",
            description: "Lorem Ipsum",
            article_text: 'Eu ad ut laboris sit officia non exercitation reprehenderit quis.',
            header_image: require('../Img/girls-on-track--1000x600.jpg'),
        },
        {
            id: 3,
            title: "Title 3",
            description: "Lorem Ipsum",
            article_text: "Amet Lorem deserunt quis anim quis mollit est reprehenderit qui aliquip.",
            header_image: require('../Img/girls-on-track--1000x600.jpg'),
        },
        {
            id: 2,
            title: "Title 2",
            description: "Lorem Ipsum",
            article_text: "Voluptate reprehenderit veniam cillum Lorem enim ea ea.",
            header_image: require('../Img/girls-on-track--1000x600.jpg'),
        },
        {
            id: 1,
            title: "Title 1",
            description: "Lorem Ipsum",
            article_text: "Aute nulla nostrud reprehenderit commodo incididunt anim aute.",
            header_image: require('../Img/girls-on-track--1000x600.jpg'),
        },
    ];

    return (
        <div className='home'>
            <Section><Hero {...posts[0]}/></Section>
            <Section><Carousel/></Section>
        </div>
    )
}

export default Home;