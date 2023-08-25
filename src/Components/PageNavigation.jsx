import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const Wrapper = styled.section`
display:flex;
background-color: ${({theme})=>theme.colors.mainColor};


.title{
    color: white;
    display: block;
    text-decoration:none;
    font-size: 2rem;
    
}
`

const PageNavigation = ({title}) => {
   
  return (
    <Wrapper>
        <p className='title'><NavLink to='/products' style={{color:"white", textDecoration:"none"}}>Products</NavLink>/{title}</p></Wrapper>
  )
}

export default PageNavigation