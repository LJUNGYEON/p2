import { useState } from 'react';
import './App.css';
import {Button,Navbar,Container, Nav, Row, Col} from 'react-bootstrap';

import data from './data'
import bg from './img/bg01.jpeg';
import { Routes, Route, Link,useNavigate,Outlet, Navigate} from 'react-router-dom';
import DetailInfo from './routes/detail';


function App() {
  let [shoes,setShoes]=useState(data);
  let navigate = useNavigate();{/* 페이지 이동함수*/} 
  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/')}}>HOME</Nav.Link>
          <Nav.Link onClick={() =>{navigate('/detail')} }>Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <button onClick={()=>{
        let copy = [...shoes];
        console.log(copy)
        copy.sort((a,b)=>{
          let x = a.title.toLowerCase();
          let y = b.title.toLowerCase();
          if(x<y)return -1;
          if(x>y)return 1;

          return 0;
        }
        )
        console.log(copy)
        setShoes(copy);

      }}>정렬</button>
      <Routes>
        <Route path="/" element={
          <>
          <div  className="main-bg" style={{backgroundImage:'url('+bg+')'}}></div>
            <Container>
              <Row>
                {
                shoes.map(function(a,i){
                  return(
                    <ShoesList index={i} shoes={shoes}></ShoesList>
                  )
                })
                }
              </Row>
            </Container>
          </>

        }></Route>
        
        <Route path="/detail/:id" element={<DetailInfo shoes={shoes}></DetailInfo>}></Route>
        
        
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버</div>}></Route>
          <Route path="location" element={<About/>}></Route>
        </Route>
        
        <Route path="/event" element={<EventPage></EventPage>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일 쿠폰 받기</div>}></Route>
        </Route>
        <Route path="*" element={<div> 없는 페이지 입니다.</div>}></Route>

      </Routes>
     
    </div>
  );
}

function ShoesList(props){
return(
      <Col>
          <img src={bg} width="60%"></img>
          <h4>{props.shoes[props.index].title}</h4>
          <p>{props.shoes[props.index].price}</p>
        </Col>

)
}

function About(){
  return(
    <div>
      <h4>
        회사 정보임
      </h4>
      <Outlet></Outlet>
    </div>
  )
}

function EventPage (){
  return(
    <div>
    <h4>
     오늘의 이벤트
    </h4>
    <Outlet></Outlet>
    </div>
  )
}
export default App;
