import React from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    color: ${({theme})=>theme.colors.mainColor};
    padding: 1.5rem 0rem;
    justify-content: center;
    font-size:${({theme})=>theme.colors.fontSize};
`

const PageHeading = (props) => {

    const value = props.name;

    
  return (
    <Wrapper>
       <h1> {value} </h1>
    </Wrapper>
  )
}

export default PageHeading;