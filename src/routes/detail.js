import { useParams } from "react-router-dom";

function DetailInfo(props){
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
return(
    <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{shoes_tmp.title}</h4>
      <p>{shoes_tmp.content}</p>
      <p>{shoes_tmp.price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
)
}
export default DetailInfo;