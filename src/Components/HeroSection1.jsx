import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Wrapper = styled.section `
display: flex;
padding: 3rem 0rem;
flex-direction: row;
justify-content: space-around;


.homepage-intro{
 display: grid;  
 width:40%;
 flex-direction: coloumn;
 align-items: center;

   

     .intro-title{
         font-size: 5rem;
         text-shadow: #fff 1px 0 10px;
     }
     .intro-para{
         font-size: 1.2rem;
         text-shadow: 1px 2px 6px rgba(128, 128, 128, 0.66);
     }
     
   
  
  .homepage-img{
    width: 100%;   
  }
 }
 

@media ( max-width : 1298px ){
 display: block;

 .homepage-intro{
     display: flex;  
     width:100%;
     justify-content: center;   
 }      
}

@media (max-width : 1296px){
 display: block;
 padding-top : 0rem;
 flex-direction: column-reverse;
 .homepage-intro{
      display: block;
            .intro-title{
                   font-size: 3rem;
                        }
                      
                 }


`

const HeroSection1 = (props) => {
   let name = props.value.name;

  

  return (
    <Wrapper>
        <div className = 'homepage-intro'>
             <h1 className = 'intro-title'>WELCOME TO <br />{name}....</h1>
             <p  className = 'intro-para' style={{padding:"1rem"}}>Lorem ipsum dolor sit amet consectetur, adipisicing<br /> elit. Dolorum, odio enim voluptatem incidunt dolore <br />m quo alias id doloremque vero, totam atque<br /> blanditiis tenetur fuga, culpa doloribus consectetur nostrum error eaque.</p>
          <NavLink to="/products"> <button  className='mybutton' style={{fontSize:"1.3rem" }}>Let's Go</button> </NavLink>
        </div>
        <div className='homepage-intro'>
            <figure>
                <img alt='homepageBanner' className = 'homepage-img' src='https://cdn3d.iconscout.com/3d/premium/thumb/ecommerce-website-5482226-4569699.png'/>
            </figure>  
        </div>
    </Wrapper>
  )
}

export default HeroSection1