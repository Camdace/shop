import { useParams } from "react-router-dom";
import { addItem } from "../store";
import { useDispatch } from "react-redux";
import { useLike } from "../hooks/like";

function Detail(props){

    let {id} = useParams();
    let 찾은상품 = props.keyboard.find(function(x){
        return x.id == id
      });
    let dispatch = useDispatch();

    let [like, addLike] = useLike()

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`../img/product-${id}.jpg`} width="100%" />
                </div>

                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>  {/*그냥 {props.keyboard[id].price}하면 상품정렬시 이상해짐*/}
                    <button className="btn btn-danger" onClick={()=>{
                        dispatch(addItem( {id : id, name : 찾은상품.title, count : 1} ))
                    }}>주문하기</button> 
                </div>
            </div>
                {like}  <span onClick={()=>{ addLike() }}>❤</span> 
        </div> 
    )
}

export default Detail;