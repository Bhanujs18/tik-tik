import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


import { styled } from 'styled-components';

const Wrapper = styled.section `
display: flex;
margin:0px;
padding:0px;
height: 31rem;
background-color:  ${({theme})=>theme.colors.themecolor};
// background-image: url("https://res.cloudinary.com/dyqynjew8/image/upload/v1699419843/Screenshot_2023-11-08_103258_cplvnm.png");

// .homepage-intro{
//  display: grid;  
//  width:40%;
//  flex-direction: coloumn;
//  align-items: center;

   

//     //  .intro-title{
//     //      font-size: 3rem;
//     //      font-family: 'Paytone One', sans-serif;
//     //      text-shadow: #fff 1px 0 10px;
//     //      color: ${({theme})=>theme.colors.mainColor};
//     //  }
//     //  .intro-para{
//     //      font-size: 1.2rem;
//     //      text-align: justify-center;
//     //      text-shadow: 1px 2px 6px rgba(128, 128, 128, 0.66);
//     //  }
     
   
  
//   // .homepage-img{
//   //   width: 100%;   
//   // }
//  }
 

// @media ( max-width : 1100px ){
//  display: block;

//  .homepage-intro{
//      display: block;  
//      width:100%;
//      justify-content: center;  
//      .homepage-img{
//            width: 40%;                 
//      } 
//  }      
// }

// @media (max-width : 894px){
//  display: block;
//  padding-top : 0rem;
//  flex-direction: column-reverse;
//  .homepage-intro{
//       display: block;
//             .intro-title{
//                    font-size: 3rem;
//                         }

//                         .intro-para{
//                             display: none;
//                         }
//                         .homepage-img{
//                            width: 90%
//                         }
                      
//                  }

                


`

const HeroSection1 = (props) => {
  return (
    <Wrapper>
        {/* <img src='https://res.cloudinary.com/dyqynjew8/image/upload/v1699419843/Screenshot_2023-11-08_103258_cplvnm.png' /> */}
        {/* <div className = 'homepage-intro'>
             <h1 className = 'intro-title'>WELCOME TO <br />{name}....</h1>
             <p  className = 'intro-para' style={{padding:"1rem"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, odio enim voluptatem incidunt dolore m quo alias id doloremque vero, totam atque blanditiis tenetur fuga, culpa doloribus consectetur nostrum error eaque.</p>
          <NavLink to="/products"> <button  className='mybutton' style={{fontSize:"1.3rem" }}>Let's Go</button> </NavLink>
        </div> */}
        {/* <div className='homepage-intro'>
            <figure>
                <img alt='homepageBanner' className = 'homepage-img' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1699419229/bubble-gum-shopping-delivery_ddau9y.gif'/>
            </figure>  
        </div> */}
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={0}
        loop={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination , Autoplay]}
        className="mySwiper"
        style={{margin:"0px", padding:"0px", transition:"all 1.5s ease"}}
      >
        <SwiperSlide><img className='slider_img' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1699431380/banner1img_edrjmp.png' /></SwiperSlide>
        <SwiperSlide><img className='slider_img' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1699431419/banner3img_1_ekvwye.png' /></SwiperSlide>
        {/* <SwiperSlide><img className='slider_img' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1699431375/banner3img_2_zgxmhs.png' /></SwiperSlide> */}
        <SwiperSlide><img className='slider_img' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1699431371/banner3img_sm6n9i.png' /></SwiperSlide>
        <SwiperSlide><img className='slider_img' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1699431368/banner2img_byubfb.png' /></SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}

export default HeroSection1