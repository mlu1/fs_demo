import { useSelector,useDispatch } from "react-redux"

const Purchase = ()=>{
    const products = useSelector(state=>state.products)
    const dispatch = useDispatch()
    const purchaseHandler=(e)=>{
        let pName = e.target.options[e.target.selectedIndex].text;
        let price = e.target.value;
        let obj = {pName,price}
        dispatch({type:'PURCHASE',payLoad:obj});
    }

    return(
        <div className="customDiv">
                <h3>Purchase Component</h3>
            <hr/>
            <select onChange={purchaseHandler}>
                {
                    products.map((product)=>{
                        return(
                        <option value ={product.price} key={$product}>
                                {product.pName} - ${product.price}
                        </option>)})
                }
            </select>                
        </div>
    )
}

export default Purchase