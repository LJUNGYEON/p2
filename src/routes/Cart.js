import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import {chgCount} from '../store/cartSlice.js'
import { plusAge, plusAge2} from '../store/userSlice.js'
import { useState, memo,useMemo } from 'react';

function 함수(){
  return 1
}

{/*props 가 변할 때만 재렌더링 해줌 */}
let Child = memo( function(){
  console.log('재렌더링됨')
  return <div>자식임</div>
})

function Cart(){
  let result = useMemo(()=>{ return 함수() }, [])


let a = useSelector((state)=>{
  return state; 
})

let dispatch = useDispatch();
console.log(a);
let [count, setCount] = useState(0)
return(
  
    <div>
      <Child></Child>
      <button onClick={()=>{
        setCount(count++)
      }}></button>
{a.user.name}의 장바구니
{a.user.age}살
<button onClick={()=>{
dispatch(plusAge())

}}>+++ </button>
<button onClick={()=>{
dispatch(plusAge2(10))

}}>10+ </button>
     <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>상태 변경</th>
            </tr>
          </thead>
          <tbody>
            {
               a.cart.map((cart,i)=>{
                return(
                  <tr>
                    <td>{i}</td>
                    <td>{cart.name}</td>
                    <td>{cart.count}</td>
                  <td>  <botton onClick={()=>{

                      const id = cart.id
                      console.log("Cart.js id:"+id);
                      dispatch(chgCount(id))
                  }} >+</botton></td>
                  </tr>
                )
               }) 
            }
          </tbody>
        </Table>
    </div>
)
}
export default Cart;