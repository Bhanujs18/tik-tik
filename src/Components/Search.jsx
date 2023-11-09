import React from 'react'
import styled from 'styled-components';
import{FaSearch} from "react-icons/fa";

const Wrapper = styled.section`
display: flex;
align-items:Center;
.div{
    border: 4px ${({theme})=>theme.colors.themecolor} solid; 
    border-radius: 15px;
    overflow:hidden;
.input{
    height: 2rem;
    border:none;
    padding: 0.4rem;
    width: 20rem;
    color: ${({theme})=>theme.colors.themecolor};
    outline:none;
}
.search{
    background-color:  ${({theme})=>theme.colors.themecolor};
    color:white;
    height:2rem;
    cursor: pointer;
    width: 2.5rem;
    font-size: 0.9rem;
    padding: 0.2rem 0.4rem;
    
}
}


@media(max-width: 640px){
    display:none;
}
`

const Search = () => {
  return (
    <Wrapper>
        <div className='div' style={{display: 'flex', alignItems:"Center"}}>
         <input className='input' type='text' placeholder='Search...' />
        <FaSearch className="search" />
        </div>
 
    </Wrapper>
  )
}

export default Search