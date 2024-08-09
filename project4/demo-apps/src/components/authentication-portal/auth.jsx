import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './auth.css'
import React ,{useState} from 'react'
import swal from 'sweetalert'


export default function AuthneticationPortal() {
    const[user,setUser] = useState('')
    const[pass,setPass] = useState('')

    const handleValidate=(e)=>{
        e.preventDefault()
        if(user ==='reactjs12@gmail.com' && pass == '123456')
            swal("Successful login","Welcome Mlu","success")
        else
            swal("Wrong credenials","Please try again","error")
        }    
    return (
        <div className="auth-container">
                <p className='paragraph-auth'>Authentication Portal</p>
                <div className='col-md-3 my-auto bg-dark p-5 rounded'>
                    <form onSubmit={handleValidate}>  
                        <div className='mb-3'>
                            <label className='form-label'>Email address</label>
                            <input type="email" 
                                   value = {user}
                                   placeholder="Email"
                                   className="form-control"
                                   onChange={(e)=>setUser(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Password</label>
                            <input type="password"
                                   value={pass}
                                   placeholder="Password"
                                   className="form-control"
                                   onChange={(e)=>setPass(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary butn-local">Submit</button>
                    </form>
            
                </div>
        </div>
    )
}