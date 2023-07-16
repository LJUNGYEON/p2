import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import {Nav} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import {addProduct} from '../store/cartSlice.js'

let YellowBtn = styled.button`
  background:${props=>props.color};
  color:b{props=>props.color == 'blue'?'white':'black'};
  padding:10px;
`
let NewBtn = styled.button(YellowBtn);


let RedDiv = styled.div`
  color:red;
`
function DetailInfo(props){
  let cartItem = useSelector((state)=>{return state});
  
  console.log(cartItem)
  let dispatch = useDispatch();

  let [count,setCount] = useState(0)
  let {id} = useParams();
  
  
  let shoes_tmp = props.shoes.find( function(x){
    return x.id == id
  } );


  let [Timer, setTimer] = useState(true);
  useEffect(()=>{
    let a = setTimeout(()=>{
      setTimer(false);
    },2000);

    return(()=>{
      clearTimeout(a)
      {/* useffect 실행 전 수행  클린업 함수 위치 */}
    })
  },[])

  let [inputVal, setInputVal] = useState('');
  let [alert,setAlert]=useState(false);
  useEffect(()=>{

    if(isNaN(inputVal)){
      setAlert(true);
    }else{
      setAlert(false);
    }
  },[inputVal])

  useEffect(()=>{
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거.push(id)
  
    //Set으로 바꿨다가 다시 array로 만들기
    꺼낸거 = new Set(꺼낸거)
    꺼낸거 = Array.from(꺼낸거)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  }, [])
  
  let [tab,setTab] = useState(0);
  
return(
    <div className="container">
      {count}
      {
        Timer === true?
        <div className="alert alert-warning">
        2초 이내 구매시 할인

      </div>
      : null 
      }
      
      <button onClick={()=>{
        setCount(count +1)
      }}>버튼</button>
      <YellowBtn color="blue">버튼</YellowBtn>
      <div className="row">
    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">
      {
          alert == true?
          <RedDiv>숫자만 입력하세요</RedDiv>
          :null
      }
      <input type="text" defaultValue={inputVal} onChange={(e)=>{
          setInputVal(e.target.value);
      }}/>
      <h4 className="pt-5">{shoes_tmp.title}</h4>
      <p>{shoes_tmp.content}</p>
      <p>{shoes_tmp.price}</p>
      <button className="btn btn-danger" onClick={()=>{
         console.log("=============detail===============")
          console.log(shoes_tmp)
        dispatch(addProduct(shoes_tmp))
      }}>주문하기</button> 
    </div>
  </div>

  <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link onClick={()=>{
        setTab(0);
      }} eventKey="link0">버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{
        setTab(1);
      }} eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=>{
        setTab(2);
      }} eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
</Nav>
<TabComponent shoes={shoes_tmp} tab={tab}/>
</div> 
)
}


function TabComponent(props){
  
  let [fade, setFade] =useState('');
  useEffect(()=>{
    let a = setTimeout(()=>{setFade('end')},100)
    
    return(()=>{
      clearTimeout(a);
      setFade('')
    })
  },[props.tab])

  

  return( <div className={'start '+fade}>
    {
      [<div>{props.shoes.title}</div>,<div>내용 1</div>,<div>내용 2</div>][props.tab]
    }
  </div>
  )
}
export default DetailInfo;