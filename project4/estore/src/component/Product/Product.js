import React from "react";
import './_product.scss'

const Product=()=>(
    <div className="row">
       <div className=" col-lg-3 col-md-6">
            <div className="product__item">
            <div className="product__item__pic">   
                <img clasName ="product__item__pic" src = {require("../../assets/img/shop/shop-1.jpg")} alt=""/>
                <ul className="product__hover">
                    <li>
                        <a href={require("../../assets/img/shop/shop-1.jpg")}>
                            <span className="fa fa-arrows-alt"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="product__item__text">
                <h6>
                    <a href="#"> Furry Hood</a>
                </h6>
                <div className="rating">
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                    <i className="fa fa-star"/>
                </div>
                <div className="product_price">$600</div>
            </div>
        </div>
       </div>
    </div> 
)

export default Product