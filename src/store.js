import { configureStore , createSlice} from "@reduxjs/toolkit";
import user from "./store/userSlice.js"
import cart from "./store/cartSlice.js"

{/*
state 수정
1.state 수정 함수  만들기
2.만든 함수 export
3.함수 import
*/}

let stock = createSlice({
    name:'stock',
    initialState:[1.,11,15]

})


export default configureStore({
    reducer:{
       user  : user.reducer,
       stock: stock.reducer,
       cart: cart.reducer
    }
})