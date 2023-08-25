
import { useContext } from 'react';
import ProductList from '../Components/ProductList';
import Sort from '../Components/Sort';
import { styled } from 'styled-components';
import { FilterContext } from '../context/Filtercontext';


  const Wrapper = styled.section`
  font-size: 1.3rem;
  .container{
  display: flex;
  justify-content: start;
  .catdiv{
    display: flex;
    justify-content: center;
    
  .categories{
    padding: 1rem;
    display: block;
    width: max-content;
    gap: 1rem;
   

    .category{
      margin: 1rem;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      background-color: white;
      border: none;
      width: 9rem;
      cursor: pointer;
    
    }
  }
}
  .prdouctlist{
    width: 80%;
  }
  }

  @media(max-width: 1300px){
    .container{
      display: block;
      .catdiv{
        display: none;
      }
    }
  }
  `

const Products = () => {

  const {all_products  ,catWise} = useContext(FilterContext); 

  const getUniquedata = (data , property) =>{
    let newval = data.map((cur)=>{
      return cur[property]});

      return newval = ["all",...new Set(newval)];
    }

const uniqueCat = getUniquedata(all_products,"category");


  return (
    <Wrapper>
     <Sort />
     <div className='container'>
            <div className='catdiv'>
            
             <div className='categories'>
               <h1>Categories</h1>
                 {uniqueCat.map((curElem, index) => {
                  return (
                    <div>
                   <button
                     key={index} 
                     name="category"
                     value={curElem}
                     className="category"
                     onClick={catWise}>
                    {curElem.toUpperCase()}
                  </button>
                    </div>
                     )})}
                   </div>
              </div>
               <div>
                 <ProductList />
               </div>
      
          </div>

    </Wrapper>
  )
}

export default Products;