import React from 'react'
import Product from './Product';
import { styled } from 'styled-components';

const Wrapper = styled.section  `
  display: grid;
  .container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 1rem;
  }

  @media(max-width: 1500px){
    display: grid;
    padding : 2rem;
    align-items: center;
     .container{
       display: grid;
       grid-template-columns: repeat(2, 1fr);
       align-items: center;
       gap: 1rem;
     }
  }

  @media(max-width: 957px){
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    justify-content: center;
     .container{
       display: grid;
       grid-template-columns: repeat(1, 0fr);
       align-items: center;
       gap: 1rem;
     }
  }
  `

const GridView = ({products}) => {

  

  return (
    <Wrapper>
    <div className='container' style={{display:"grid"}}> 
      {products.map((cur)=>{
        return <Product key={cur.id} {...cur} />
      })}
    </div>
    </Wrapper>
  )
}

export default GridView