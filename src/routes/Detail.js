import { useParams } from "react-router-dom";

function Detail(props){

    let {id} = useParams();
    const imageUrl = `../img/product-${id}.jpg`;

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={imageUrl} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.keyboard[id].title}</h4>
                    <p>{props.keyboard[id].content}</p>
                    <p>{props.keyboard[id].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;