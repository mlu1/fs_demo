import { useEffect, useState } from "react"
export default function(){
    const [usersList,setUsersList] = useState([])
    async function fetchAllUsers(){
        try{
            const apiResponse  = await fetch('http://dummyjson.com/users')
            const result = await apiResponse.json()
            if(result?.users){
                setUsersList(result.users)
            }
            else{
                setUsersList([])
            }
        }
        catch(error){
            console.log(error)
        }
    }

console.log(usersList)
useEffect(()=>{
    fetchAllUsers()
},[])

    return(
        <div>
            <h1>All Users</h1>
            <ul>
                {
                    usersList && usersList.length > 0 ?
                    usersList.map(userItem =>
                        <li key ={userItem?.id}>
                             <p>{userItem?.firstName} {userItem?.lastName}</p>
                        </li>
                        ):<h1>No Users Found!</h1>
                }
            </ul>
        </div>
    )
}
