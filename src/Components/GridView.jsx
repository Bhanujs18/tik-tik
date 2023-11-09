import React from 'react'
import Product from './Product';
import { styled } from 'styled-components';
import FeatureCards from './FeatureCards';

const Wrapper = styled.section  `
display: flex;
justify-content:center;
align-items:Center;
gap: 2rem;
flex-wrap:wrap;
width: 100%;
  `

const GridView = ({products}) => {

  

  return (
    <Wrapper>
      {products.map((cur)=>{
      
return <FeatureCards key={cur.id} product={cur} />

      })}
    </Wrapper>
  )
}

export default GridView