import { useState,useEffect} from "react";
import ProductItem from "./components/product-item";
import './style.css';

const initialState = true
 
function ProductList({name,city,listOfProducts}){
    
    const [flag,setFlag] = useState(initialState)
    const [count,setCount] = useState(0)
    const [changeStyle,setChangeStyle] = useState(false)

    function handleToggleText(){
        setFlag(!flag)
    }

    function handleIncreaseCount(){
        setCount(count+1);
    }
    
    useEffect(()=>{
        if (count === 10){
            setChangeStyle(true);
        }   
    },[count]) //this will run only once on page load

    return (
        <div>
            <h3 className="title">eCommerce Project </h3>
            <button onClick={handleToggleText}>ToggleText</button>
                {flag ? (
                    <h4>{name} and {city}</h4>
                ):(
                    <h4>Hello</h4>
                )}
                <div>
                    <button 
                    style={{backgroundColor:changeStyle? 'black':'red'}}
                    onClick={handleIncreaseCount}>Increase</button>
                    <p>{count}</p></div>
                <ul>
                    {
                        listOfProducts.map((item,index) => (<ProductItem singleProductItem = {item} key={index}/>))
                    }
                </ul>
        </div>
        )    
}

export default ProductList;