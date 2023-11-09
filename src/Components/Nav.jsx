import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { CgMenu, CgClose } from "react-icons/cg";
import {FiShoppingCart} from 'react-icons/fi';
import { CartContext } from '../context/cartContext';
import { useAuth0 } from '@auth0/auth0-react';
import {BiSolidUser} from 'react-icons/bi';



const Wrapper = styled.section`
display: flex;
align-items: center;
font-size: 1.1rem;
margin:0;
padding:0;

//  navbar ul


.navbar-list{
    display: flex;
    align-items:center;
    list-style-type: none;
    gap: 3.8rem;
  font-weight: 500;
   
    
    @media (max-width: ${({theme})=>theme.media.mobile}){
        display: none;
}


// navbar links
     
    

    .navbar-link{
        color: black;
        display: inline-block;
        text-decoration: none;
        font-weight: 500;
         
        background-repeat: no-repeat;
       

              
    }
    .username{
      display: flex;
      align-items: center;
      gap:0.4rem;
      background:none;
     }
}

// trolley icon css 

    .cart-trolley{
        color: black;
        padding: 0rem 1rem;
        display: flex;
        text-decoration: none;
        
        .cart-item-number{
         background-color: black;
         color: white;
         justify-content:Center;
         display: flex;
         align-items:center;
         transform: translate(-50%-50%);
          width: 1.5rem;
          border-radius: 50%;
          height: 1.5rem;
          font-weight: 400;
         z-index:1;
         
        }
    }

  

    // hamburger and cross icon
    .mobile-navbar-btn{
       
        display: none;
        background-color: transparent;
        cursor: pointer;
        border: none;
        
    }
      .mobile-nav-icon[name="close-outline"] {
        display: none;
        
      }
    
     .close-outline{
        display:none;
     }
   

    @media(max-width: ${({theme})=>theme.media.mobile}){   
      color: black;
      
    
        z-index: 99;
     .mobile-navbar-btn{
      display:flex;
      justify-content:center;
      align-items:center;
        
        .mobile-nav-icon{
            font-size:3rem; 
            color: black;
            }
        }
     
     .active .mobile-nav-icon{
        display:none;
        
        position: relative;       
     }
     .active .close-outline{
        display: inline-block;
        
        
     }
     .navbar-list {
        position: absolute;
        top: 0;
        left: 0;
        color: black;
        width: 100%;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        padding: 2rem;
       
      }

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
         color: ${({theme})=>theme.colors.themecolor};

        .navbar-link {
        
          font-size: 1.2rem;
          color: ${({theme})=>theme.colors.themecolor};
       
        }
        .cart-trolley{
          color: black;
        }
      }
    
    }
       
    
    

@media(max-width : 1476px){
  .navbar-list{
.username{
  display: none;
}
}
}


`


const Nav = () => {

    const [menuicon, setMenuicon] = useState(false);
    const {total_item} = useContext(CartContext);
    const { loginWithRedirect , logout ,isAuthenticated , user} = useAuth0();
      


  return ( 

        <Wrapper>
          <div className={menuicon ? "active navbar" : "navbar"}>
          <ul className='navbar-list'>
            {isAuthenticated ?
            <li className='username navbar-link'>
                <BiSolidUser />
                <p style={{color:"white"}}>{user.name}</p>
            </li> : null}
            <li>
                <NavLink to="/" className ='navbar-link'  onClick={()=>setMenuicon(false)} >
                    Home
                </NavLink>
            </li>
            <li >
                <NavLink to="/products" className ='navbar-link'  onClick={()=>setMenuicon(false)} >
                    Products
                </NavLink>
            </li>
            <li >
                <NavLink to="/about" className ='navbar-link '  onClick={()=>setMenuicon(false)} >
                    About
                </NavLink>
            </li>
            <li >
                <NavLink to="/contact" className ='navbar-link'  onClick={()=>setMenuicon(false)} >
                    Contact
                </NavLink>
            </li>
            {isAuthenticated ? ( <li >
              <button className='mybutton' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Logout
               </button>
            </li>) : (<li >
              <button className='mybutton'  onClick={() => loginWithRedirect()}>
                    Login
                </button>
            </li>)}
           
           
            <li>
                <NavLink to="/cart" className ='cart-trolley'  onClick={()=>setMenuicon(false)}>
                       <FiShoppingCart className='cart-item-icon'/>
                       <p className='cart-item-number'>{total_item}</p>
                </NavLink>
            </li>
        </ul>
        
        <div className="mobile-navbar-btn"  style={{color:"#0877B6" , alignItems:'center'}}>
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            style={{color:"#0877B6"}}
            onClick={() => setMenuicon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            style={{color:"#0877B6"}}
            onClick={() => setMenuicon(false)}
          />
        </div>
        
        </div>
       
     </Wrapper>
    
  )
}

export default Nav;