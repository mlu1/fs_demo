import { useState } from "react"

export default function FormComponent(){

    const [nameValue,setNameValue] =useState("")
    
    const handleInputChange =(event)=>{
        console.log(event)
        const {value} = event.target
        setNameValue(value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(nameValue,"nameValue")
    }

    return(
        <div>
              <h1>Form</h1>
              <form onSubmit={handleSubmit}>
                <input
                    value  = {nameValue}
                    name = "name" id = "name"
                    placeholder="Enter your name"
                    onChange={handleInputChange}
                    />
                    <button type = "Submit">Submit</button>
                </form>
        </div>
      
    ) 
}