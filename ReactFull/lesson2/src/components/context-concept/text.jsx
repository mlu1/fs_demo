import { useContext, useState } from "react"
import { GlobalContext } from "../../context"

export default function ContextTextComponent(){
    const {theme} =useContext(GlobalContext)
    
    return (<h1 style ={{fontSize: theme=='light'? '50px':'100px',
                        backgroundColor:theme=='light'?'white':'black',
                        color:theme =="light"?"blue":"yellow"
                        }}> Change Text</h1>)
}