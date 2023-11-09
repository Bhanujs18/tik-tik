import React, { useContext } from "react";
import { FilterContext } from "../context/Filtercontext";
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {

  
    const {list_view , grid_view , filter_products} = useContext(FilterContext);
         
      if(grid_view===true){
        return <GridView products={filter_products} />
      }
      if(list_view===true){
        return <ListView products={filter_products} />
      }
    
    };
    
    export default ProductList;