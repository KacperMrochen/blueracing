import React from "react";
import { useState } from 'react';
import Card from "./Card.js";
import '../Styles/Carousel.css';
import { useSpringCarousel } from 'react-spring-carousel'

const Carousel = () => {
 
  const [activeItem, setActiveItem] = useState(0)

  const cards = [
    {
      "title" : "Oliwia Wiśniowska",
    },
    {

      "title" : "Item 2",
    },
    {

      "title" : "Item 3",
    },
    {

      "title" : "Item 4",
    },
    {

      "title" : "Item 5",
    },
    {

      "title" : "Item 6",
    }
  ];

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  }

  window.addEventListener('resize', handleResize);

  const { carouselFragment,
          thumbsFragment,
          useListenToCustomEvent,
          slideToPrevItem, 
          slideToNextItem,
          slideToItem,
  } = useSpringCarousel({
    withLoop: true,
    withThumbs: true, 
    itemsPerSlide: windowSize > 800 ? 3 : 1,
    items: cards.map((i, index) => ({
      id: index,
      renderItem: (
        <Card title={i.title} style={index !== activeItem ? {opacity: 0.5,  transform: 'scale(0.7)', transition: '0.25s'} : {opacity: 1, transform: 'scale(1)', transition: '0.25s'}}></Card>
      ),
      renderThumb: (
        <div 
          className="current" onClick = { () => slideToItem(index) } style={index === activeItem ? {background: "black"} : {background: "white"}} 
        />
      )
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveItem(event.nextItem.index)
    } 
  });

  return (
    <div className="container">
      <div className='carousel'>
            <button className="carousel__btn prev" onClick={slideToPrevItem}>{"<"}</button>
            {carouselFragment}
            <button className="carousel__btn next" onClick={slideToNextItem}>{">"}</button>
      </div> 
        <div className="actualState">{thumbsFragment}</div> 
    </div>
  )
}

export default Carousel;