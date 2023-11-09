import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav';
import { styled } from 'styled-components';
import Search from './Search';

const Wrapper = styled.section`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
display: flex;
margin:0;
padding:0;
justify-content: space-between;
// background-color: ${({theme})=>theme.colors.themecolor};
color: black; 
height: 3.7rem;
.logo{
    height: 3.7rem;
    margin:0rem;
    @media (max-width: ${({theme})=>theme.media.mobile}){
    }
}



`


const Header = () => {
   
  return (
    <Wrapper>
        <NavLink to ="/">
            <img alt="main-logo" src="https://res.cloudinary.com/dyqynjew8/image/upload/v1699520492/Tik_Tik_ox0f8x.png" className='logo' />
        </NavLink>
        <Search />
        <Nav />
    </Wrapper>
  )
}

export default Header;