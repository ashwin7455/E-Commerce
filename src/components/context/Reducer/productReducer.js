const ProductReducer = (state , action) => {
    // if (action.type === "SET_LAODING"){
    //     return{
    //         ...state,
    //         isLoading : true,
    //     }; 
    // }

    // if (action.type === "API_ERROR"){
    //     return{
    //         ...state,
    //         isLoading: false,
    //         isError:true,

    //     }
    // }
    switch(action.type){
       
        case "SET_API_DATA":
        const featureData = action.payload.filter((curElem)=>{
          return curElem.featured === true;

        })

        return {
            ...state,
            isLoading:false,
            products:action.payload,
            featureProducts:featureData,
             
        }

        case" SET_LAODING":
        return{
                    ...state,
                    isLoading : true,
                };

        case" API_ERROR":
        return{
                    ...state,
                    isLoading : false,
                    isError:true,
                 };

        default:
            return state; 
    }

};

export default ProductReducer