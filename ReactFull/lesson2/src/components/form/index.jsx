import { useState } from "react"

export default function FormComponent(){

    const [nameValue,setNameValue] =useState("")
    const [emailValue,setEmailValue] = useState("");

    const [formData,setFormData] = useState({
        name:'',
        email:''
    });
    
    const handleInputChange =(event)=>{
        console.log(event)
        const {value} = event.target
        setNameValue(value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(nameValue,emailValue)
    }

    const handleEmailChange = (event)=>{
        const {value} = event.target
        setEmailValue(value)
    }
    
    function handleOnChange(event){
        console.log(event.target.name)
        const {name ,value} =event.target
        setFormData({...formData,
            [name]:value
            }) 

    }

    //call api and pass the name value
    console.log(formData)
    return(
        <div>
              <h1>Form</h1>
              <form onSubmit={handleSubmit}>
                <input
                    value  = {formData.name}
                    name = "name" id = "name"
                    placeholder="Enter your name"
                    onChange={handleOnChange}
                />
                <input
                    value={formData.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="enter email"
                    onChange={handleOnChange}

                />
                <button type="submit">Submit</button>
                </form>
        </div>
      
    ) 
}