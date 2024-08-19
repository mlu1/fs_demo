import logo from "./logo.svg";
import "./App.css";
import { Route, Routes,Navigate,useLocation } from "react-router-dom";
import Home from "./components/home";
import { useState,lazy,Suspense} from "react";
import { SwitchTransition,CSSTransition } from "react-transition-group";
import { appRoutes } from "./route";

const Users = lazy(()=> import("./components/users"))
const UserProfile = lazy(()=> import("./components/userProfile"))
const SearchUser = lazy(()=> import("./components/searchUser"))
const Login = lazy(()=> import("./components/login"))
const AuthProfile = lazy(()=> import("./components/authProfile"))
const  AboutUs = lazy(()=> import("./components/about"))
const  NotFound = lazy(()=> import("./components/notfound"))

function App() {
  const[username,setUsername] = useState("");
  const[isLogged,setIsLogged] = useState(false);
  const location = useLocation()
  
  return (
      <SwitchTransition component ={null}>
        <CSSTransition key ={location.pathname} 
          classNames='fade' 
          timeout={300}
          unmountOnExit
        >
         <Suspense fallback ={(()=><h1>Loading</h1>)}>
         <Routes Location= {Location}>{appRoutes.map((route)=>{
          if(route.requiresAuth && !isLogged){
            return <Route key = {route.path} 
                          exact
                          path={route.path}
                          element ={<Navigate replace to={"/login"}/>
                          }/> 
          }else{
              return <Route key = {route.path}
                          exact
                          path = {route.path}
                          element = {<route.component
                                     setIsLogged={setIsLogged}
                                     setUsername={setUsername}
                                    username={username}/>}/>
          }
         })}</Routes>
         </Suspense> 
        </CSSTransition>
      </SwitchTransition>
      
  );
}

export default App;
