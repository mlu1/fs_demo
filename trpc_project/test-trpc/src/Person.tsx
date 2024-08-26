import { useState,useContext } from "react"
import { UserContext } from "./UserContextProvider"


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

    const {users,updateUser,deleteUser} =useContext(useContext)
    return(
        <div>    
            <p>{props.name}</p> 
            <p>{props.age}</p> 
            <p>{props.isMarried?"is married":"not married"}</p>

            <p>{props.name} Personal Bio {!personBio ? "NoBio":personBio}</p>
            <input onChange={handleChange}/>
            <div>
                <span>Delete ALLL</span>
                <button>Press ME</button>
            </div>
        </div>
    );
}