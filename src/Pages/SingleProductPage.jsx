import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/productcontext';
import MyIMage from '../Components/MyIMage';
import { styled } from 'styled-components';
import FormatPrice from "../Helper/FormatPrice"
import PageNavigation from '../Components/PageNavigation';
import Colors from '../Components/Colors';



const Wrapper = styled.section`
display: block;

align-items: center;


.container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem;
 
 
  

  .productinfo{
    display: block;
    align-items: start;
    width: 40%;
    text-transform: uppercase;
    font-size: 1.3rem;
    .text{
      display: flex;
    align-items: start;
    text-align: justify;
    }
    .title{
      font-size: 4rem;
    }
    .desc{
      font-size: 1rem;
      display: flex;
      justify-content: start;
    }
    .brand{
      background-color: ${({theme})=>theme.colors.mainColor};
      color: white;
      width: max-content;
      padding:0.2rem 1rem;
    }
  }
  
}

@media(max-width: 1509px){
  .singlediv{
    display: flex;
    justify-content: center;
    align-items: center;
    
  .container{
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  .imgdiv{
    display: flex;
    justify-content: center;
   
  }
  .productinfo{
    width: 100%;
    padding: 2rem;
    
  }
}
}
}

@media(max-width: 938px){
  .singlediv{
    display: flex;
    justify-content: center;
    align-items: center;
   
  .container{
  display: block;
  align-items: center;
  justify-content: center;
  .imgdiv{
    display: flex;
    justify-content: center;
   
  }
  .productinfo{
    padding: 0.3rem;
    .title{
      font-size: 2rem;
    }
  }
}
}
}
`   



const API = "https://api.pujakaitem.com/api/products";

export const SingleProductPage = () => {
  const { singleProduct, isSingleLoading, getSingleProducts} = useContext(AppContext);
    const {id} = useParams();
    
    const{
      name,
      company,
      price,
      description,
      category,
      stock,
      stars,
      reviews,
      image,
    } = singleProduct;

  
    useEffect(()=>{
    getSingleProducts(`${API}?id=${id}`);
    },[])

    

  if(isSingleLoading){
    <div className='loading'>Loading...</div>
  }

 
 
   
    return (
      <Wrapper>
        <PageNavigation  title={name} />
        <div className='singlediv'>
        <div className='container'>
          <div className='imgdiv'>
             <MyIMage imgs = {image} />
         </div>
          <div className='productinfo'>
            <h1 className='text title'>{name}</h1>
              <div style={{display:"flex", gap: "1rem"}}>
                <i className='text brand'>{company}</i>
                <p className='text'>Ratings : {stars}⭐ </p>
                <p className='text'>Reviews - {reviews}</p>
             </div>
                <p className='text' style={{color:"red"}}>MRP:<del>{<FormatPrice  price={price+3000} />}</del></p>
             <div className='text' style={{color:"green"}}>Deal of the day: {<FormatPrice  price={price} />}</div>
             <p className='text desc'>Description<i>- {description}</i></p>
             <p className='text'>Category - {category}</p>
             <p className='text'>Stock :{stock>0 ? "In Stock" : "NOt Vailable"}</p>
             <hr />
             <div>
              <Colors product={singleProduct} />
             </div>
             </div>          
          </div>
          </div>
    </Wrapper>
  )
}
