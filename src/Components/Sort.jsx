import React, { useContext } from 'react';
import {BsGrid1X2Fill} from 'react-icons/bs';
import { FilterContext } from '../context/Filtercontext';
import {BsList} from 'react-icons/bs';
import { styled } from 'styled-components';

const Wrapper = styled.section`
display: flex;
transition: all 0.3s ease;
align-items: center;
justify-content: space-between;
background-color: black;
padding: 0.5rem;
 p{
  color : white;
 }

.listbox{
display: flex;
align-items: center;
justify-content: center;
border: 2px solid black;
width: max-content;
.sortIcon{
    font-size: 2.3rem;
    padding: 0.5rem;
    cursor: pointer;
    color : ${({theme})=>theme.colors.themecolor};
}
.active{
    background-color: ${({theme})=>theme.colors.themecolor};
    color: white;
}
}
`

const Sort = () => {
    const {setListView , setGridView , grid_view , list_view , filter_products} = useContext(FilterContext);

 

  return (
    <Wrapper>

        <div className='listbox'>
        <BsGrid1X2Fill className={grid_view === true? 'sortIcon active' : 'sortIcon'} onClick={setGridView}/>
        <BsList className={list_view === true? 'sortIcon active' : 'sortIcon'} onClick={setListView} />
        </div>

        <p>{filter_products.length} Products Available</p>
    </Wrapper>
  )
}

export default Sort