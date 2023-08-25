import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import {BsInstagram , BsFacebook , BsTwitter } from 'react-icons/bs';
import {AiFillMessage} from 'react-icons/ai';

const Wrapper = styled.section`
background-color: #7A918D;
color: white;

.footerDiv{
    display:flex;
    padding: 3rem;
    align-items: center;
    justify-content: space-between;
    gap: 8rem;

    .footerlogo{
        height: 15rem;
    }

    .footer-div-sections{
        display: inline-block;
       
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
            &:hover{
                transform: scale(1.2);   
              
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
        <div className='footer-div-sections'  style={{display:"flex" , justifyContent:"center"}}>
        <img alt="main-logo" src="./Images/Mainlogo.png" className='footerlogo' />
        </div>
        <div className='footerDiv'>
         <div className="footer-div-sections none">
            
            <ul className='none'>
            <li>
            <NavLink className="footer-links" to='/'>Home</NavLink> 
            </li>
            <li>
            <NavLink className="footer-links" to='/products'>Products</NavLink>
            </li>
            <li>
            <NavLink className="footer-links" to='/about'>About Us</NavLink>
            </li>
            <li>
            <NavLink className="footer-links" to='/contact'>Contact Us</NavLink>
            </li>
            </ul>
        </div>
        <div className="footer-div-sections">
            <BsInstagram className='footer-icons'/>
            <BsFacebook className='footer-icons'/>
            <BsTwitter className='footer-icons'/>
            <AiFillMessage className='footer-icons'/>
        </div>
       
        <div className="footer-div-sections">
        <div className='none'>
          <h1>Call Us</h1>
                    <h1> +11 2143 23423,</h1>
                    <h1> +11 2143 23423,</h1>
                    <h1> +11 2143 23423,</h1>
                    <h1> +11 2143 23423</h1>
        </div>
        </div>
        </div>
     </div>
     <p>© 2023 Tik Tik. All rights reserved</p>
    </Wrapper>
  )
}

export default Footer