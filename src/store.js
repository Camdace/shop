import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20}
  })

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'Razer Huntsman V2 Linear KR wired gaming keyboard', count : 2},
        {id : 2, name : 'Razer Huntsman V2 TKL Linear Quartz US wired gaming keyboard', count : 1},
        {id : 1, name : 'Razer Pro Type Ultra KR Wired and wireless gaming keyboard', count : 1}
    ],
    reducers : {
        addCount(state, action){ //id번호로찾아서 추가
            let 번호 = state.findIndex((a)=>{ return a.id === action.payload })
            state[번호].count++
        },
        subCount(state, action){ //인덱스번호로찾아서 추가
            state[action.payload].count--
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
})
export let {addCount, subCount, addItem} = cart.actions


export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
   }
}) 