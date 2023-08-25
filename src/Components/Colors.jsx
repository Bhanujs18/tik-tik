import React, { useState } from 'react'
import { styled } from 'styled-components';
import AddtoCart from './AddtoCart';

const Wrapper = styled.section`
    
    .colorbox{
        display: flex;
        gap: 1rem;
        padding: 0.5rem;
    .buttoncolor{
        width:max-content;
        display:inline-flex;
        border-radius: 50%;
        height: 2rem;
        width: 2rem;
        opacity:0.5;

        .check{
        height: 2rem;
        width: 2rem;
        
        }
    }
    .active{
        opacity:1;
        transform: scale(1.2);  
    }
}
    `


const Colors = ({product}) => {
    const { name , id  , stock , colors=[]} = product;

    const [maincolor ,setMaincolor] = useState(colors[0]);
    

    
  return (
    <Wrapper>
    <div className='colorbox'>
        COLORS: {colors.map((cur,index)=>{return(<button key={index} style={{backgroundColor:cur}} 
         className={maincolor===cur? "buttoncolor active": "buttoncolor"} onClick={()=>setMaincolor(cur)} >
            {maincolor===cur? <p className="check" /> : null}
         </button>)})}
    </div>
    <AddtoCart stock={stock} id={id} name={name} product={product} color={maincolor}/>
    </Wrapper>
  )
}

export default Colors;