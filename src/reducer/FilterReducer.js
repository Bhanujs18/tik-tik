const filterReducer = (state, action) => {

   switch(action.type){
    case"ALL_DATA_LOADED":
    return{
        ...state,
        all_products : [...action.payload],
        filter_products : [...action.payload],
    };
    case"GRID_VIEW":
     return{
        ...state,
        grid_view : true,
        list_view : false,
     };
     case"LIST_VIEW":
     return{
        ...state,
        list_view : true,
        grid_view : false,
     };

     case"CATFILTER":
     const { name , value } = action.payload;

     console.log( name +" "+ value)

     return {
       ...state,
       filter: {
         [name]: value,
       },
     };


     case"FILTERCAT":
     let {all_products} = state;
     let copypro = [...all_products];
     console.log("i m filtercat")
     const {category} = state.filter;
     console.log(category)
     if (category !== "all") {
        copypro = copypro.filter(
        (curElem) => curElem.category === category
        );
        }
     return{
       ...state,
        filter_products : copypro,
     };


    default : 
        return state;
    
    
   }
}
export default filterReducer;