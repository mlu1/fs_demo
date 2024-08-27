import ProductItem from "./components/product-item";
import './style.css';
 
function ProductList({name,city,listOfProducts}){
    const flag = false;

    function renderTextBlock(getFlag){
        getFlag ? (<h4>Name is {name} and city is {city}</h4>):(<h3>Hello World</h3>)
    }
    
    return <div>
        <h3 className="title">eCommerce Project </h3>
        {renderTextBlock(flag)}
        <ul>
            {
                listOfProducts.map((item,index) => (<ProductItem singleProductItem = {item} key={index}/>))
            }
        </ul>
    </div>
}

export default ProductList