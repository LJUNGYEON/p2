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
            state.push(action.payload);
            state.map((a,i)=>{
                console.log(i)

                console.log(a[i])

            })
            
        }
      }

})

export let {chgCount, addProduct} = cart.actions

export default cart;