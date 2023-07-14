import { configureStore , createSlice} from "@reduxjs/toolkit";

let cart = createSlice({
    name:'cart',
    initialState:[
        {id : 5, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
      reducers:{
        chgCount(state){
            console.log(state);
            let index;
           state.map((st , i)=>{
            console.log( st[i]);
            
           })
           console.log("index:"+index);

        }
      }

})

export let {chgCount} = cart.actions

export default cart;