import { configureStore , createSlice} from "@reduxjs/toolkit";
{/*
state 수정
1.state 수정 함수  만들기
2.만든 함수 export
3.함수 import
*/}

let user = createSlice({
    name:'user',
    initialState:{name:'kim', age:20},
    reducers:{
        changeName(state){{/* 기존 state*/}
            state.name = 'park'
       
            {/*  return  'john '+state*/}
       
        },
        plusAge(state){
            state.age++;
        },
        plusAge2(state,action){
            state.age += action.payload;
        },
        함수명(){
            {/*함수 여러개 가능 */}
        } 
    }

})

export let { changeName,함수명, plusAge, plusAge2} = user.actions

export default user;