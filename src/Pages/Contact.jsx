import React from 'react';
import { styled } from 'styled-components';
import {FiPhoneCall} from 'react-icons/fi';
import PageHeading from '../Components/PageHeading';


const Wrapper = styled.section`

.contactTitle{
  display: flex;
  align-items: center;
 color: ${({theme})=>theme.colors.mainColor};
  justify-content: center; 
  font-size:  ${({theme})=>theme.colors.fontSize}; 
}

.contactForm{
  padding: 3rem 0rem;
  display: flex;
  flex-direction: column ;
  align-items: center;

  background-color: ${({theme})=>theme.colors.mainColor};
  .submitform{
    padding: 0.4rem 2rem;
    font-size:1rem;
    border: none;
    background-color:black;
    color:white;
  }

  .inputForm{
    width: 40% ;
    height: 3rem ;
    padding: 1rem;
  }
  
}

    @media(max-width: ${({theme})=>theme.media.mobile}){   
  .contactForm{
   
     width: 100%;

    .inputForm{
     
      width: 90%;
            }
            
  }
}

`

const Contact = () => {


  return (
    <Wrapper>
      <div className="contactTitle" >
        <PageHeading name="Contact Us" />
        <FiPhoneCall/>
     </div>
    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72022703974!2d76.82493315398123!3d28.423160294893716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1691668600846!5m2!1sen!2sin" 
    width="100%" 
    height="450"
    style= {{border : "0"}} 
    loading="lazy"/>
    <form className='contactForm' action='https://formspree.io/f/mleyjnjr' method='post'>
      <h1 style={{color:"white"}}>Need Help? Drop Your Message..</h1>
      <input className='inputForm'  name='name' type='text' placeholder='Name....'/>
      <input className='inputForm'  name='email' type='email' placeholder='Email....'/>
      <input className='inputForm' style={{height:"5rem"}}  name='message' placeholder='Message....' />
      <button className='submitform' type='submit'>Submit</button>
    </form>
    </Wrapper>
  ) 
}

export default Contact;