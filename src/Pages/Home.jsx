import React from 'react';
import HeroSection2 from '../Components/HeroSection2';
import HeroSection1 from '../Components/HeroSection1';
import Trusted from '../Components/Trusted';


const Home = () => {
  return (
    <div>
    <HeroSection1 value={{name : "Tik Tik" , link: "/products"}} />
    <HeroSection2 />
    <Trusted />
    </div>
  )
}

export default Home;