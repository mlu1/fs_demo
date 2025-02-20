import React from "react";
import "./_topmenu.scss"

const menu  = ["Home","Women","Men","Kids","Best Seller"]

const TopMenu=()=>{
    return(
    <header>
       <div className="menuHeader">
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <nav className="menu">
                        <ul>
                            {
                                menu.map((item)=>(
                                    <li key ={` _ ${item}`}> 
                                        <a href=""> {item}</a> 
                                    </li>
                                )
                            )}        
                        </ul>
                    </nav>
                </div>
            </div>
       </div>
    </header>
    )
}

export default TopMenu
