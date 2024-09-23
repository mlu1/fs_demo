import { useContext, useState } from "react"
import { GlobalContext } from "../../context"

export default function ContextButtonComponent(){
    const {setTheme,theme} = useContext(GlobalContext)
    
    const handleThemeChange =()=>{
        setTheme(theme=='light'?'dark':'light')
    }
   
    return (<button onClick={handleThemeChange}> Mluleki</button>)
}