import React from 'react';
import {FaTruckMoving} from 'react-icons/fa';
import { styled } from 'styled-components';
import {AiFillLock} from 'react-icons/ai'; 
import {BiTimer} from 'react-icons/bi';
import {BiSolidCheckShield} from 'react-icons/bi'

const Wrapper = styled.section`
padding: 2rem 0rem;
font-size: 1.7rem;
.hero2div{

display: flex;
flex-direction: row;
justify-content: center;
gap: 6rem;
background-color: #7A918D; 

align-items: center;
color: white;

.heroSection-1-grids{
padding: 2rem;

margin: 8px;   
border-radius: 4%;
}
.heroSection-1-grids-1{
padding: 1rem;  }

}


@media (max-width : 960px){
display: block;
.hero2div{
  display: block;
  justify-content: center;
  font-size: 1rem;

}
}
`

const HeroSection2 = () => {
   
  return (
    <Wrapper>
      <div className='hero2div'>
           <div className='heroSection-1-grids'>
           <FaTruckMoving />
           <p>Fastest and Secured Delivery</p>
           </div >
             <div  className='heroSection-1-grids'>
               <BiSolidCheckShield />
               <p>Non-Contact Shipping</p>
             </div>
             <div  className='heroSection-1-grids'>
              <BiTimer />
              <p>15 Days Return Policy</p>
              </div>
          <div className='heroSection-1-grids'>
           <AiFillLock />
          <p>We Secure your data</p>
         </div>
      </div>

    </Wrapper>
  )
}

export default HeroSection2;