import { useState } from "react"

interface Props{
    name:String,
    age:number,
    isMarried:boolean
}

export const User =(props:Props)=>{
    const [personBio,setpersonBio] = useState<string|null>(null)

    
    const handleChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        setpersonBio(event.target.value)
    }
    return(
        <div>    
            <p>{props.name}</p> 
            <p>{props.age}</p> 
            <p>{props.isMarried?"is married":"not married"}</p>

            <p>{props.name} Personal Bio {!personBio ? "NoBio":personBio}</p>
            <input onChange={handleChange}/>
        </div>
    );
}