import React from 'react';
import { styled } from 'styled-components';


const Wrapper = styled.section`

.trustdiv{
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     padding: 1rem 7rem;
.trustedimgs{
   
    height: 9rem;
    width: 9rem;
    
    &:hover{
    transform: scale(1.1);   
    }
}
}


@media (max-width : 1146px){
   display: block;
   align-items: center;
   
   .trustdiv{
      display: grid;
      grid-template-columns: repeat(3, 0.2fr);
      justify-content: center;
      gap: 0.9rem;
      .trustedimgs{
         align-items: center;
         height: 6rem;
         width: 6rem;
         
         &:hover{
         transform: scale(1.1);   
         }
     }
   }
   }

`

const Trusted = () => {



    return (
    <Wrapper>
      <div>
        <h1 style={{color:"#7A918D"}}><i>Trusted By</i></h1>
        </div>
        <div>
        <div className='trustdiv'>
        <div>
           <img className='trustedimgs'  src='https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png' alt='compnay1' />
        </div>
        <div>
           <img className='trustedimgs'  src='https://seeklogo.com/images/U/uber-eats-logo-39748746B7-seeklogo.com.png' alt='compnay2' />
        </div>
        <div>
           <img className='trustedimgs'  src='https://seeklogo.com/images/D/dunzo-logo-FF49681C98-seeklogo.com.png' alt='compnay3' />
        </div>
        <div>
           <img className='trustedimgs'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Blinkit-yellow-app-icon.svg/2048px-Blinkit-yellow-app-icon.svg.png' alt='compnay4' />
        </div>
        <div>
           <img className='trustedimgs'  src='https://play-lh.googleusercontent.com/6vbFCfoCaXTaGmBFHVyh4oTSlxgsD17Kxw7bxt7OZKPfrm8E-D9aUVIcHruBoXWCcno' alt='compnay5' />
        </div>
        </div>
        </div>
     
    </Wrapper>
  )
}

export default Trusted