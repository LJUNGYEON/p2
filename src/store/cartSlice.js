import { configureStore , createSlice} from "@reduxjs/toolkit";

let cart = createSlice({
    name:'cart',
    initialState:[
        {id : 5, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
      reducers:{
        chgCount(state, action){
            console.log(state);
            const product = state.findIndex((item) => {return item.id === action.payload });
            state[product].count++;
        },
        addProduct(state,action){
            const product = state.findIndex((item) => {return item.id === action.payload.id });
            product > 0 ?  state[product].count++: state.push(action.payload)
            
           
            
        }
      }

})

export let {chgCount, addProduct} = cart.actions

export default cart;