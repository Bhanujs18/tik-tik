import React from 'react'
import { styled } from 'styled-components';
import FormatPrice from '../Helper/FormatPrice';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.section  `
display: block;
padding : 2rem;

.container{
 
 display: block;


          .product{
            display: flex;
            align-items: center;
            padding-top: 1rem;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

                .imgss{
                   display: flex;
                   height : 15rem;
                   width: 20rem;
                   padding: 1rem;
                      }
   
               .productinfo{
                  padding: 1rem;
                  display: block;
                  align-items: start;
                  text-transform: uppercase;
                  font-size: 1.3rem;

                                .text{
                                  display: flex;
                                align-items: start;
                                font-size: 2rem;
                                border: none;
                                text-decoration-color: white;
                                                            text-decoration-line: underline;
                                }

                                .desc{
                                  font-size: 1.2rem;
                                  display: flex;
                                  justify-content: start;
                                }
                                .hide
                                {
                                  display: block;
                                }
                            }
                         }
                        }

@media(max-width: 1300px){
 
  display: block;
  .container{
    display: block;
    .product{
      display: flex;
      justify-content: center;
      .productinfo{
    .hide{
      display: none;
    }
  }
  }
  }

  @media(max-width: 692px){
 
    display: block;
    .container{
         display: block
      justify-content: center;
      .product{
        display: block;
        
        .productinfo{
      .hide{
        display: none;
      }
    }
    }
    }


`

const ListView = ({products}) => {


   
  
    return (
      <Wrapper> 
        <div className='container' style={{display:"block"}}> 
          {products.map((cur)=>{
            return(
                <NavLink to={`/singleproduct/${cur.id}`}>
                <div key={cur.id} className='product'>
                 <img className='imgss' src={cur.image} alt={cur.name} />
                 <div className='productinfo'>
                 <p className='text'>{cur.name}</p>
                 <p className='text desc'><FormatPrice price={cur.price} /></p>
                 <p className='text desc hide'>Description<i>- {cur.description}</i></p>
                 <p className='text desc'>Category - {cur.category}</p>
                 <p className='text desc'>Stock :{ cur.stock > 0? "In Stock" : "NOt Vailable"}</p>
                 </div>
                 </div>
                 </NavLink>
            )
          })}
        </div>
        </Wrapper>
      )
}

export default ListView