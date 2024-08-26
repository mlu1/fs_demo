import ProductItem from "./components/product-item";



function ProductList({name,city,listOfProducts}){

    return <div>
        <h3>eCommerce Project </h3>
        {/*<ProductItem/>*/}
        <h4>Name is {name} and city is {city}</h4>
        <ul>
            {
                listOfProducts.map((item,index) => (<li key={index}>{item}</li>))
            }
        </ul>
    </div>
}

export default ProductList