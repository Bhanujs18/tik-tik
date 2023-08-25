const cartReducer = (state, action) => {
if(action.type==="ADD"){
    let { id, value, product ,color} = action.payload;

  let exist = state.cart.find(
    (curitem)=>curitem.id === id+color
  );

  if(exist){
    let newcartproduct = state.cart.map((curitem)=>{
        if(curitem.id === id+color){
           let newval = curitem.value + value;
           if(newval >=product.stock){
            newval = product.stock;
           }

           return {
            ...curitem,
           value: newval,
           }
        }
        else{
        return curitem;
        }
    })
    return{
      ...state,
      cart : newcartproduct,
    }
  }

    let cartProduct;
    
    cartProduct = {
      id: id + color,
      name: product.name,
      value,
      color,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };   
}
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if(action.type==="CLEAR_CART"){
    return {
        ...state,
        cart : [],
    }
  }

  if(action.type==="TOTAL_CART"){
    let {total_item , total_amount} = state.cart.reduce((initialvalue,curelem)=>{
        let {value , price} = curelem;
        initialvalue.total_item = initialvalue.total_item + value;
        initialvalue.total_amount = initialvalue.total_amount + value*price;
       return initialvalue;
    },
    {
    total_item:0,
    total_amount:0,
    
   });
    return{
        ...state,
        total_item,
        total_amount,
    }
  }
  return state;
}

export default cartReducer;