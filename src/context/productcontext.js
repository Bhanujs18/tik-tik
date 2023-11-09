import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";
import { useContext } from "react";

const AppContext = createContext();

const API = "https://bhanujs18.github.io/tik-tik-api/data.json";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  singleProduct: {},
  isSinglepageError : false,
  isSingleLoading: false,
};

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async(url)=>{
     dispatch({type : "LOADING..."})
     try{
      const res = await axios.get(url)
      const products = await res.data;
      dispatch({type:"API DATA", payload: products});
     }catch(error){
      dispatch({type:"FAILED TO LOAD DATA!!!!"})
     }
    }

    const getSingleProducts = async(url)=>{
      dispatch({type : "SINGLELOADING..."})
      try{
       const res = await axios.get("https://api.pujakaitem.com/api/products/")
       const singleProduct = await res.data;
       dispatch({type:"SINGLE DATA", payload: singleProduct});
      }catch(error){
       dispatch({type:"SINGLE FAILED TO LOAD DATA!!!! FAILED TO LOAD DATA!!!!"})
      }
     }
  
    useEffect(()=>{
      getProducts(API);
    },[])
  
  
    return (
    <AppContext.Provider value={{...state , getSingleProducts}}>
      {children}
      </AppContext.Provider>
  )
}

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };