import { useState } from "react"

interface Props{
    name:String,
    age:number,
    isMarried:boolean
}

export const Person =(props:Props)=>{
    const [isShowInfo,setShowInfo] = useState<boolean>(false)

    const toggleInfo = ()=>{
        setShowInfo((prev) => !prev )
    }

    return(
        <div>    
            {
                isShowInfo &&  (<>
                    <p>{props.name}</p> 
                    <p>{props.age}</p> 
                    <p>{props.isMarried?"is married":"not married"}</p>
                    </>
            )}
            <p>{props.name} Personal Bio</p>
            <input/>
            <button onClick={toggleInfo}>Toggle Info</button>
        </div>
    );
}