import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import {chgCount} from '../store/cartSlice.js'
import { plusAge, plusAge2} from '../store/userSlice.js'

function Cart(){
let a = useSelector((state)=>{
  return state; 
})

let dispatch = useDispatch();
console.log(a);

return(
    <div>
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
                      let id = cart.id
                      dispatch(chgCount())
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