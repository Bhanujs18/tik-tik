import React, { useState } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.section`

    display:flex;
    align-items: center;
    gap: 1rem;
    .imgselect{
    .imgss{
        display: flex;
        height : 9rem;
        width: 14rem;
    }
  }
    .imgsss{
        display: flex;
        height : 29rem;
        width: 40rem;
    }

    @media(max-width: 938px){
      display: block;
      .imgselect{
        display: flex;
        padding : 1rem;
        .imgss{
            display: flex;
            height : 3rem;
            width: 5rem;
        }
      }
        .imgsss{
            display: flex;
            height : 15rem;
            justify-content: center;
            width: 5rem;           
            width: 100%
        }

    }
    `

const MyIMage = ({imgs=[{url: ""}]}) => {

const [mainImage , setMainImage] = useState(imgs[0]);
    

  return (
    <Wrapper>
         <div className='imgselect'>
        {imgs.map((curelem , index)=>{
        return <img src={curelem.url} key={index} alt={curelem.name} className='imgss' onClick={()=>setMainImage(curelem)}/>
        })} 
        </div>
    

        <img src={mainImage.url}  className='imgsss' alt='mainImage.name'/>        
       
       </Wrapper>
  )
}

export default MyIMage;