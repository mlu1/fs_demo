import MenuList from "./menu-list"
import { useState } from "react"

export default function MenuItem({item}){
    
    const [displayCurrentChildren,setDisplayCurrentDisplay] =useState(0)

    return (
        <li>
            <p>{item.label}</p>
            {
               item && item.children && item.children.length > 0 
               ? <MenuList list = {item.children}/>
               :null
            }
        </li>
    )
}