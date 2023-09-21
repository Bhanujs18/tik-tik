import React, { useContext, useState } from 'react';
import {AiOutlineMinus , AiOutlinePlus} from 'react-icons/ai';
import { styled } from 'styled-components';
import { CartContext } from '../context/cartContext';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.section`
.addtocarbox{
display: flex;
align-items: center;
gap: 0.4rem;
.addbutton{
    background-color: ${({theme})=>theme.colors.mainColor};
    color: white;
    padding: 0.2rem 0.7rem;
    border: none;
    font-size: 1.3rem;
}
}

`

const AddtoCart = ({stock, id ,color, product}) => {

const [value , setValue] = useState(0);
const { addedtocart} = useContext(CartContext);

  

  return (
    <Wrapper>
        {stock > 0 ? <div className='addtocarbox'>
        Select Quantity : 
        <AiOutlineMinus  onClick={()=>setValue(value-1>0? value-1 : 0)} />
        <button className='addbutton' placeholder='Add'> {value} </button> 
        <AiOutlinePlus onClick={()=>setValue(value+1<=stock? value+1 : value )}/>
        </div> : null}
        <div>
            <button onClick={()=>addedtocart(id, value, color,  product )} className='mybutton'> ADD TO CART</button>   
            <NavLink to='/cart'><button className='mybutton'> GO TO CART</button> </NavLink>
        </div>
    </Wrapper>
  )
}

export default AddtoCart
