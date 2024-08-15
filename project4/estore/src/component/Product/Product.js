import React from "react";
import './_product.scss'
import image1 from '../../assets/img/shop/shop-1.jpg';

const products = [
    require('../../assets/img/shop/shop-1.jpg'),
    require('../../assets/img/shop/shop-2.jpg'),
    require('../../assets/img/shop/shop-3.jpg'),
    require('../../assets/img/shop/shop-4.jpg'),
    require('../../assets/img/shop/shop-4.jpg'),
]

const Product=()=>(
    <div className="row">{
        products.map((item,index)=>(
            
        <div className="col-lg-3 col-md-6">
            <div className="product__items">
                <div className="product__item__pic">
                        <img className ="product__item__pic" src = {item} alt=""/>
                        <ul className = "product-hover">
                            <li>
                                <a href = {item}>
                                    <span className="fa fa-arrows-alt"/>
                                </a>
                            </li>
                        </ul> 
                </div>
                <div className="product__item__text">
                    <h6> Furry Hooded</h6>
                </div>
            </div>
        </div>
        
        ))}
    </div>
    
)

export default Product