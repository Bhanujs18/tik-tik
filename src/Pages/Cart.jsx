import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import {AiFillDelete} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import PageHeading from '../Components/PageHeading';
import { styled } from 'styled-components';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import FormatPrice from '../Helper/FormatPrice';
import { useAuth0 } from '@auth0/auth0-react';


const Wrapper = styled.section`
height: 100%;
align-items: center;
font-size: 1.2rem;
.contactTitle{
    display: flex;
    align-items: center;
   color: ${({theme})=>theme.colors.mainColor};
    justify-content: center; 
    font-size:  ${({theme})=>theme.colors.fontSize}; 
  }
  .container{
    display: flex;
   
    justify-content: center;
    gap: 4rem;
 

    .button{
        margin-top: 1rem;
        font-size: 1.3rem;
        background-color: ${({theme})=>theme.colors.mainColor};
        cursor: pointer;
    }
    
    .total{
       border: 2px ${({theme})=>theme.colors.mainColor} solid;
        text-transform: uppercase;
        padding: 2rem;
        margin: 1rem;

        .totaltr{
        displaY: flex;
        gap: 3rem;
        justify-content: space-between;
                  }
            }

         .th_css{
            gap: 4rem;
             padding : 2rem;
             text-transform : uppercase;
               }
               .boughtColor{
                display: flex;
                border-radius : 50%;
                 width: 1.4rem;
                 height: 1.4rem;
               }
               .remove{
                cursor: pointer;
               }
            
     }
   .buttons{
    padding: 1rem;
    display: flex;
    
    justify-content: center;
    gap: 2rem;
    
    
        
  .continueshopping{
    padding: 0.8rem;
    border: none;
    font-size: 1.3rem;
    background-color: ${({theme})=>theme.colors.mainColor};
    color: white;
    cursor: pointer;
  }
   .clearcart{
    padding: 0.8rem;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    background-color: red;
    color: white;
   }
}

@media(max-width: 1463px){
  display : block;

  .container{
    display: block;
    
    align-items: center:
    justify-content: center;
    padding: 2rem;
    .table{
      display: flex;
      justify-content: center;
    }
  }
  .userinfo{
    width:100%;
     padding:2rem ;
      display:flex ;
       gap:1rem;
  }
  

@media(max-width: 942px){
  font-size: 1rem;
  .userinfo{
    display: block;
  }
  .container{
    padding: 1rem;
    .th_css{
      padding: 1rem;

    }
    .hide{
      display: none;
    }
  }
  
}


`

const Cart = () => {

    const { removeItem , cart , clearcart ,total_amount } = useContext(CartContext);
    const {isAuthenticated , user} = useAuth0();

    const loadScript = (src) => {
      return new Promise((resovle) => {
        const script = document.createElement("script");
        script.src = src;
  
        script.onload = () => {
          resovle(true);
        };
  
        script.onerror = () => {
          resovle(false);
        };
  
        document.body.appendChild(script);
      });
    };
    

    const displayRazorpay = async (amount) => {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
  
      if (!res) {
        alert("You are offline... Failed to load Razorpay SDK");
        return;
      }
      const options = {
        key: "rzp_test_Qkpjm8WUVjFfLA",
        currency: "INR",
        amount: amount * 100,
        name: "TIK TIK",
        description: "Thanks for purchasing",
        image:
          "./Images/Mainlogo.png",
  
        handler: function (response) {
          alert(response.razorpay_payment_id+" Payment Successfully");
        },
        prefill: {
          name: "TIK TIK",
        },
      };
      const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

   
  return (
    <Wrapper>
             <div className="contactTitle" >
                 <PageHeading name="Cart Items" />
                 <AiOutlineShoppingCart/>
              </div>
        {isAuthenticated ? (
          <div className="userinfo">
          <img src={user.picture} alt={user.name} />
          <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          </div>
         </div>) : null}


          
               <div className='container'>
                  <div className="table">
                    <div>
                     <table>
                         <tr>              
                           <th className='th_css'>Product</th>
                           <th className='th_css'>Quantity</th>
                           <th className='th_css'>Color</th>
                           <th className='th_css hide'>Price</th>
                           <th className='th_css hide'>Subtotal</th>
                         </tr>
                            {cart.map((cur, index)=>{
                                return(
                        <tr key={index}>
                            <td className='th_css'>{cur.name}</td>
                            <td className='th_css'>{cur.value}</td>
                            <td hide style={{display:"flex" , justifyContent:"center"}} className='th_css'><p  className='boughtColor' style={{backgroundColor: cur.color}}></p></td>
                            <td className='th_css hide'><FormatPrice price={cur.price} /></td>
                            <td className='th_css hide'><FormatPrice price={cur.price*cur.value} /></td>
                            <td className='th_css remove'><AiFillDelete style={{color: "red"}} onClick={()=>removeItem(cur.id)} /></td>
                         </tr>
                                      )})}
               
                        </table>
                     <div className='buttons'>
                     <NavLink to='/products'><button  className="continueshopping">Continue Shopping</button></NavLink>
                     <button className="clearcart" onClick={clearcart}>Clear Cart</button>
                   </div>
                   </div>
                  </div>
                 <div className="table">
                  <div>
                 <table className='total'>
                    <tr className='totaltr'> 
                        <td className='totaltdleft th_css'>Cart Value  :</td>
                        <td className='totaltdright th_css'><FormatPrice price={total_amount} /></td>
                    </tr>
                    <tr className='totaltr'>
                        <td className='totaltdleft th_css'>Charges and Taxes  :</td>
                        <td className='totaltdright th_css'><FormatPrice price={500} /></td>
                    </tr>
                    <hr />
                    <tr className='totaltr'>
                        <td className='totaltdleft th_css'>To pay :</td>
                        <td className='totaltdright th_css'><FormatPrice price={total_amount+500} /></td>
                    </tr>
                   </table>
                   <button className="mybutton" onClick={()=>displayRazorpay((total_amount+500)/100)}>Pay and Place Order</button>
                  </div>
                  </div>
                 </div>
            
               
               
              

    </Wrapper>
  )
               }


export default Cart;