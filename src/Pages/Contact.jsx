import React from 'react';
import { styled } from 'styled-components';
// import {FiPhoneCall} from 'react-icons/fi';
// import PageHeading from '../Components/PageHeading';


const Wrapper = styled.section`
height:100vh;
display:flex;
align-items:Center;
justify-content:Center;
width:!00%;
// background-image: url("https://t4.ftcdn.net/jpg/03/33/95/45/360_F_333954582_N8aP0cr1LA4vgh7goQEkFMFF59ca9gYM.jpg");
// background-size: cover;



body, button, input {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.background {
  display: flex;
}

.container {
  flex: 0 1 700px;
  margin: auto;
  padding: 10px;
}

.screen {
  position: relative;
  background: rgb(62,92,118,0.1);
  width:60rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;  border-radius: 15px;
}

.screen:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #3E5C76;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: ;
}

.screen-header-button.close {
  background: #ed1c6f;
}

.screen-header-button.maximize {
  background: #e8e925;
}

.screen-header-button.minimize {
  background: #74c54f;
}

.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display:flex;
  justify-content:Center;
  align-items:Center;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: black;
  font-size: 26px;
}



.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: black;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: black;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  color: black;
}

.app-form-control:focus {
  border-bottom-color: black;
}

.app-form-button {
  background: none;
  border: none;
  color: black;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

.app-form-button:hover {
  color: #b9134f;
}

.credits {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #ffa4bd;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  font-weight: normal;
}

.credits-link {
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}

.dribbble {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}

@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}


`

const Contact = () => {


  return (
    <Wrapper>
     <div className="background">
  <div className="container">
    <div className="screen">
      {/* <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div> */}
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <img alt='img' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1699477543/sammy-service-support_asvjff.gif' />
            {/* <span>CONTACT</span>
            <span>US</span> */}
          </div>
          {/* <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div> */}
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO" />
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" />
            </div>
            <div className="app-form-group buttons" style={{display:'flex' , justifyContent:'right',gap:'2rem', alignItems:'center'}}>
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</div>

    </Wrapper>
  ) 
}

export default Contact;