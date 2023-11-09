import React from 'react';
import styled from 'styled-components';
import FormatPrice from '../Helper/FormatPrice';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.section`

color: black;
body {
    background-color: var(--var-main-darkest);
}

img {
    width: 100%;
    border-radius: 15px;
    display: block;
}

a {
    color: inherit;
}

h1 {
    font: var(--var-heading);
    color: var(--var-lightest);
    padding: 1.2em 0;
}

h2 {
    font: var(--var-small-heading);
    color: var(--var-lightest);
    /* padding on .coin-base */
}

p {
    font-size: 1rem;
}

span {
    color: white;
}

.card-container {
    width: 20rem;
    margin: 2em auto;
    background-color: white;
     border-radius: 15px;
    margin-bottom: 1rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

div.flex-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div.coin-base, .time-left, .card-attribute {
    display: flex;
    align-items: center;
    padding: 1em 0;
}

.card-attribute {
    padding-bottom: 1.5em;
    border-top: 2px solid var(--var-line-dark);
}

a.hero-image-container {
    position: relative;
    display: block;
}



/* Details */

img.eye {
    position: absolute;
    width: 100%;
    max-width: 2em;
    top: 44%;
    left: 43%;
}

@media (min-width:400px) {
  img.eye {
    max-width: 3em;
}
}

.hero-image-container::after {
    content: '';
    background-image: url("https://i.postimg.cc/9MtT4GZY/view.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 5rem;
    background-color: rgb(1,1,1,0.4);
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease-out;
}

.hero-image-container:hover::after {
  opacity: 1;
}

.small-image {
    width: 1.2em;
    margin-right: .5em;
}

.small-avatar {
    width: 2em;
    border-radius: 200px;
    outline: 2px solid white;
    margin-right: 1.4em;
}

div.attribution {
    margin: 0 auto;
    width: 100%;
    font: var(--var-para);
    text-align: center;
    padding: 1.5em 0 4em 0;
    color: var(--var-line-dark);
}
.attribution a {
    color: var(--var-soft-blue);
}

@media (min-width:600px) {
    body {
        font-size: 18px;
    }
}
`

const FeatureCards = ({product}) => {

    const {id} = product;
  return (
    <Wrapper>
<div>
  <div class="card-container">
        <NavLink to={`/singleproduct/${id}`} className="hero-image-container">
        <img class="hero-image" src={product.image} alt="Spinning glass cube"/>
        </NavLink>
       
      <main class="main-content">
        <h1><a href="#" className='product_name'>{product.name}</a></h1>
        <p style={{fontSize:'1rem'}}>{product.description.slice(0,100)}</p>
        <div class="flex-row">
          <div class="coin-base">
            <img src="https://res.cloudinary.com/dyqynjew8/image/upload/v1699448075/icons8-rupee-48_ho7cwz.png" alt="img" class="small-image"/>
            <p>{product.price / 100}</p>/-
          </div>
          <div class="time-left">
            <img src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png" alt="clock" class="small-image"/>
            <p   style={{fontSize:'1rem'}}>3 days left</p>
          </div>
        </div>
      </main>
    </div>
    </div>
    </Wrapper>
  )
}

export default FeatureCards;