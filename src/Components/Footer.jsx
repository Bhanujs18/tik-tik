import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import {BsInstagram , BsFacebook , BsTwitter } from 'react-icons/bs';
import {AiFillMessage} from 'react-icons/ai';

const Wrapper = styled.section`
background-color: ${({theme})=>theme.colors.themecolor};
color: white;

.footerDiv{
    display:flex;
    padding: 1rem 3rem;
    align-items: center;
    justify-content: space-between;
    gap: 8rem;

    .footerlogo{
        height: 7rem;
    }

    .footer-div-sections{
        display: flex;
       
      .footer-links{
          display: flex;
          flex-direction: row;
          text-decoration: none;
          color: white;
          font-size: 2rem;
                }

        .footer-icons{
            display: flex;;
            font-size: 3rem;
            padding: 0.4rem;
            transition: all 0.3s ease;

            &:hover{
                transform: scale(1.2);   
              transition: all 0.3s ease;
                }
        }        
         }
}

@media(max-width: 1197px){
.footerDiv{
  display: inline-block;
  .footerlogo{
    height: 5rem;
  }
  .footer-div-sections{
    display: flex;
    .none{
      display: none;
    }
  }
}
}
`

const Footer = () => {
   
  return (
    <Wrapper>
     <div className='footerDiv'>

     <div className="footer-div-sections">
        <a href='https://www.instagram.com/' style={{color: "white"}}><BsInstagram className='footer-icons' /></a>
        <a href='https://www.facebook.com/' style={{color: "white"}}>    <BsFacebook className='footer-icons'/> </a>
        <a href='https://www.twitter.com/' style={{color: "white"}}>    <BsTwitter className='footer-icons'/> </a>
        <a href='https://www.gmail.com/' style={{color: "white"}}>     <AiFillMessage className='footer-icons'/></a>
        </div>

        <div className='footer-div-sections'  style={{display:"flex" , justifyContent:"center"}}>
        <img alt="main-logo" src="https://res.cloudinary.com/dyqynjew8/image/upload/v1699520492/Tik_Tik_ox0f8x.png" className='footerlogo' />
        </div>
      
      
       
     
     </div>
     <p>© 2023 Tik Tik. All rights reserved</p>
    </Wrapper>
  )
}

export default Footer