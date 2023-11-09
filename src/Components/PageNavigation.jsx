import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const Wrapper = styled.section`
display:flex;
padding: 1rem;


.title{
  color: ${({theme})=>theme.colors.themecolor}; 
     display: block;
    text-decoration:none;
    font-size: 1.5rem;
    
}
`

const PageNavigation = ({title}) => {
   
  return (
    <Wrapper>
        <p className='title'><NavLink to='/products' style={{color:"#3e5c76", textDecoration:"none"}}>Products</NavLink>/{title}</p></Wrapper>
  )
}

export default PageNavigation