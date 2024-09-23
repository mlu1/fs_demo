import { useEffect, useState } from "react"
export default function () {
    const [usersList, setUsersList] = useState([])
    const [pending, setPending] = useState(false)

    async function fetchAllUsers() {
        try {
            setPending(true)
            const apiResponse = await fetch('http://dummyjson.com/users')
            const result = await apiResponse.json()
            if (result?.users) {
                setUsersList(result?.users)
                setPending(false)
            }
            else {
                setUsersList([])
                setPending(false)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    function handleFetchData(){
            fetchAllUsers()
    }

    
    console.log(usersList)
    if (pending) {
        return <h1> Fetching Users Please Wait!</h1>
    }

    return (
        <div>
            <h1>All Users</h1>
            <button onClick={handleFetchData}>Fetch Data</button>
            <ul>
                {
                    usersList && usersList.length > 0 ?
                        usersList.map(userItem =>
                            <li key={userItem?.id}>
                                <p>{userItem?.firstName} {userItem?.lastName}</p>
                            </li>
                        ) : <h1>No Users Found!</h1>
                }
            </ul>
        </div>
    )
}
