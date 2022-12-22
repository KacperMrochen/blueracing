import React from "react";
import "../Styles/Hero.css"
import Post from "./Post";
import { Link } from "react-router-dom";

interface HeroProps {
    id: number;
    title: string;
    description: string;
    article_text: string;
    header_image: string;
  }

const Hero = ({title, header_image, description, article_text, id}: HeroProps) => {
    
    return (
            <div className="hero">
                <h1>{title}</h1>
                <img src={header_image} alt='xxx'></img>
                <Link to={`/posts/`+id}><button>Read more</button></Link>
            </div>
    )
}

export default Hero;