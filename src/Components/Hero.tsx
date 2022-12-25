import React from "react";
import "../Styles/Hero.css"
//import Post from "./Post";
import { Link } from "react-router-dom";

interface HeroProps {
    id: number;
    title: string;
    description: string;
    article_text: string;
    header_image: string;
  }

const Hero = ({title, header_image, description, id}: HeroProps) => {
    
    return (
        <div className='hero'>
            <img src={header_image} alt="..."/>
            <div className='content'>
                <h2 className="hero__title">{title}</h2>
                <p className="hero__desc">{description}</p>
                <Link to={"/posts/"+id}><button>Read more</button></Link>
            </div>
            <div className='image'/>
        </div>
    )
}

export default Hero;