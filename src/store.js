import { configureStore , createSlice} from "@reduxjs/toolkit";
{/*
state 수정
1.state 수정 함수  만들기
2.만든 함수 export
3.함수 import
*/}
let user = createSlice({
    name:'user',
    initialState:'kim',
    reducers:{
        changeName(state){{/* 기존 state*/}
            return  'john kim'
        },
        anotherFunc(){
            {/*함수 여러개 가능 */}
        } 
    }

})

export let { changeName,함수명} = user.actions

let stock = createSlice({
    name:'stock',
    initialState:[1.,11,15]

})

let cart = createSlice({
    name:'cart',
    initialState:[
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ]

})


export default configureStore({
    reducer:{
       user  : user.reducer,
       stock: stock.reducer,
       cart: cart.reducer
    }
})