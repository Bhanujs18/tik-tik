import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import FormatPrice from "../Helper/FormatPrice";

const Wrapper= styled.section`
    
display:flex;
justify-content: space-around;

.card{
  padding: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; 
  // width: max-content;
  width: 100%;
  

  .imgdiv{
   
    .img_api{
      height: 13rem;
      width: 18rem;
              }
         }
  .infodiv{
         }

 }
}

.productinfo{
  display: flex;
  justify-content: space-between;
  color: black;
  .text{
    border: none;
    text-decoration-color: #C2D8D4;
    text-decoration-line: underline;
  }
}




`

const Product = (curElem) => {
  const { id, name, image, price } = curElem;

  
 
  return (
    <Wrapper>
     <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <div className="imgdiv">
          <img className="img_api"  src={image} alt={name} />
        </div>

        <div className="infodiv">
          <div className="productinfo">
            <h3 className="text">{name.toUpperCase()}</h3>
            <p className="text"><FormatPrice price={price} /></p>
          </div>
        </div>
      </div>
     </NavLink>
    </Wrapper>
  );
};

export default Product;