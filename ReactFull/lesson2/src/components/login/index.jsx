import { loginFormElements } from "../../config";
import CommonForm from "../common-form";

function LoginComponent(){
    return(
        <div>
            <h1>Login page/Component</h1>
            <CommonForm formControls={loginFormElements}/>
        </div>
    )
}

export default LoginComponent;