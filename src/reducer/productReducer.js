const productReducer = (state , action) => {
  
    switch(action.type){
case"LOADING...":
return{
    ...state,
    isLoading : true,
};


case"API DATA":
const featuredData = action.payload.filter((curElem)=>{
    return curElem.featured === true;
})
return{
    ...state,
    isLoading: false,
    products: action.payload,
    featureProducts: featuredData
};


case"FAILED TO LOAD DATA!!!!":
return{
    isError: true
};


case"SINGLELOADING...":
return{
    ...state,
    isSingleLoading : true,
};

case"SINGLE DATA":
return{
    ...state,
    isSinglepageError: false,
    isSingleLoading : false,
    singleProduct: action.payload,
};


case"SINGLE FAILED TO LOAD DATA!!!!":
return{
    isSinglepageError: true
};

default:
        return state;
}
}

export default productReducer