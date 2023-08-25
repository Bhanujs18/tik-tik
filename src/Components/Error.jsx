import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Wrapper = styled.section`
padding: 4rem;
font-size: 2rem;
align-items:center;
.error-btn{
    margin-top: 1rem;
    padding: 0.7rem 4rem;
    font-size: 1.2rem;
    background-color: #7A918D;
    border: none;
    color: white;
}

`

export const Error = () => {
  
  return (
    <Wrapper>
        <div>
        <p> Oops !! You are on wrong way...</p>
        <img src='https://www.freeiconspng.com/thumbs/error-icon/orange-error-icon-0.png' alt='error' />
        </div>
        <NavLink to='/' ><button className='error-btn'>Home</button></NavLink>
    </Wrapper>
  )
}
export default Error;