import React from "react";
import './_sidebar.scss'

const SideBar=()=>(
    <div>
        <div className="sidebar_category">
            <div className="section-title">
                <h4>Categories</h4>
            </div>
            <div className="category_accordian">
                <div className="accordian">
                    <div className="card">
                        <div className="card-heading">
                            <a href = "#">Women</a>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>
                                    <a>Coats</a>
                                </li>
                                <li>
                                    <a>Jackets</a>
                                </li>
                                <li>
                                    <a>Dresses</a>
                                </li>
                                <li>
                                    <a>Shirts</a>
                                </li>
                                <li>
                                    <a>Jackets</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default SideBar;