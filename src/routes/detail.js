import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import {Nav} from 'react-bootstrap';
import { cleanup } from "@testing-library/react";

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

  let [count,setCount] = useState(0)
  let {id} = useParams();
  console.log(
    props.shoes
  );
  let shoes_tmp = props.shoes.find( function(x){
    return x.id == id
  } );
  console.log(
    shoes_tmp 
  );

  let [Timer, setTimer] = useState(true);
  useEffect(()=>{
    console.log("안녕")

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
console.log(inputVal);
    if(isNaN(inputVal)){
      setAlert(true);
    }else{
      setAlert(false);
    }
  },[inputVal])

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
      <button className="btn btn-danger">주문하기</button> 
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