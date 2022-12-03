import React from 'react';
import './Styles/App.css';
import Header from './Components/Header';
import Kart from './Components/Kart';
import Races from './Components/Races';
import QuoteBlock from './Components/QuoteBlock';
import Video from './Components/Video';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/*<Kart></Kart>
        <QuoteBlock></QuoteBlock>
      <Races></Races>
      <Video></Video>
      <Banner></Banner>
      */} 
      
      <Footer></Footer>
    </div>
  );
}

export default App;
