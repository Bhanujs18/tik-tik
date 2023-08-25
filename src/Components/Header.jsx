import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav';
import { styled } from 'styled-components';

const Wrapper = styled.section`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
display: flex;
justify-content: space-between;
background-color: #7A918D;
color: white;

.logo{
    height: 6.7rem;
    padding: 0.2rem 0.2rem;
    @media (max-width: ${({theme})=>theme.media.mobile}){
    height: 4rem;
    }
}



`


const Header = () => {
   
  return (
    <Wrapper>
        <NavLink to ="/">
            <img alt="main-logo" src="./Images/Mainlogo.png" className='logo' />
        </NavLink>
       
        <Nav />

    </Wrapper>
  )
}

export default Header;