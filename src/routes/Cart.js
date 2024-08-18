import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { addCount, subCount } from "./../store.js"


function Cart(){

    let state = useSelector((state) => state) 
    let dispatch = useDispatch()

    return(
        <div>
            <h6>{state.user.name}{state.user.age}의 장바구니</h6>
            
            <Table striped>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>수량변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i)=>
                        <tr key={i}>
                            <td>{state.cart[i].id}</td>
                            <td>{state.cart[i].name}</td>
                            <td>{state.cart[i].count}</td>
                            <td><button onClick={()=>{dispatch(subCount(i))}}>－</button><button onClick={()=>{dispatch(addCount(state.cart[i].id))}}>＋</button> </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart