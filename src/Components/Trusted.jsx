import React from 'react';
import { styled } from 'styled-components';


const Wrapper = styled.section`

.trustdiv{
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     padding: 1rem 7rem;
.trustedimgs{
   border-radius: 50%;   
    height: 9rem;
    width: 9rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;   
     padding: 0rem;
    transition: all 0.3s ease;
    &:hover{
    transform: scale(1.1);  
    transition: all 0.3s ease;
 
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
           <img className='trustedimgs'  src='https://asset.brandfetch.io/idAgPm7IvG/idUYJC4H48.jpeg' alt='compnay1' />
        </div>
        <div>
           <img className='trustedimgs'  src='data:image/jpeg;base64,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' alt='compnay2' />
        </div>
        <div>
           <img className='trustedimgs'  src='https://seeklogo.com/images/U/uber-eats-logo-CA3BA2098B-seeklogo.com.png' alt='compnay3' />
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