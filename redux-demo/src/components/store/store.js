
import { legacy_createStore as createStore } from 'redux';
const initData = {
    products:[ 
            {pName:'Apple',price:20},
            {pName:'Banana',price:3},
            {pName:'Orange',price:10},
            {pName:'Grapes',price:8},
            {pName:'Mango',price:14}],
    cart:[],
    total:0
}

const reducer=(state = initData,action)=>{
    return state
}

const store = createStore(reducer)
export default store
