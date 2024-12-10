import { useSelector } from "react-redux"
const Cart =()=>{
    const cart = useSelector(state => state.cart)

    return (
        <div className="customDiv">
            <h3>Cart Component</h3>
            <hr/>
            <ul>
                {
                    cart.map((product)=>{
                    return(
                            <li key ={product}>{product.pName}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Cart 