import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const localStorageCart=()=>{
let newcart = localStorage.getItem("cartStorage");
// if(newcart === []){
//     return [];
// }
// else{
//     return JSON.parse(newcart);
// }
const parsedata = JSON.parse(newcart);
if(!Array.isArray(parsedata)) return [];
return parsedata;
};


const initialState = {
  cart: localStorageCart(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addedtocart = (id, value ,color, product) => { 
    dispatch({ type: "ADD", payload: { id, value , color,  product} });
  };


  useEffect(()=>{
    dispatch({type:"TOTAL_CART"});
    localStorage.setItem("cartStorage" , JSON.stringify(state.cart));
  },[state.cart]);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearcart = () =>{
    dispatch({type:"CLEAR_CART"});
  };

  return (
    <CartContext.Provider value={{ ...state, addedtocart, removeItem, clearcart }}>
      {children}
    </CartContext.Provider>
  );
};


export { CartProvider, CartContext };