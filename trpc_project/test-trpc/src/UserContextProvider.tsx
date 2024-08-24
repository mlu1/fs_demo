import { createContext,useEffect,useState } from "react";

export interface User{
    name:String,
    age:number,
    isMarried:boolean
}

interface userContextType{
    users:User[] | null;
    addUser:(user:User) =>void;
    updateUser:(id:string,isMarried:boolean) =>void;
    deleteUser:(id:string) =>void;
}

const contextInitailValues = {
    users:null,
    addUser: () =>null,
    updateUser:() =>null,
    deleteUser:() =>null,   
}

export const UserContext  = createContext<userContextType>(contextInitailValues);

interface Props{
    children:React.ReactNode
}

export const userProvider = (props:Props) =>{

    const [users,setUsers] = useState<User[] |null>(null)
    useEffect(()=>{
            setUsers([{name:"Mluleki",age:22,isMarried:false}])
    },[])

    const addUser = (user:User)    => null
    const updateUser = (id:string) => null
    const deleteUser = (id:string) => null

    return <UserContext.Provider value={{users,addUser,updateUser,deleteUser}}> {props.children}</UserContext.Provider>
}