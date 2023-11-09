import React, { useContext } from 'react'
import { FilterContext } from '../context/Filtercontext';
import FeatureCards from './FeatureCards';
import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
justify-content:center;
align-items:Center;


// background-color: rgb(1,2,1,0.2);
gap: 2rem;
flex-wrap:wrap;
width: 100%;
`

const NewLaunched = () => {
    const {all_products} = useContext(FilterContext); 

  return (
    <Wrapper>
        {all_products.map((cur,index)=> {
            if(cur.featured)
            return   <FeatureCards product={cur} key={index} />;
        
        } )}
    </Wrapper>
  )
}

export default NewLaunched;