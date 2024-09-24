import { useEffect, useState } from "react"
import classes from './components/styles.module.css'
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-detaills";

function App() {
  const [loading,setLoading] = useState(false)
  const [todoList,setTodoList] =useState([]);
  const [errorMsg,setErrorMsg] = useState(null)
  const [todoDetails,setTodoDetails] = useState(null)
  const [openDialog,setOpenDialog] = useState(false)
  


  async function fetchListTodo() {
   try{
      setLoading(true)
      const apiResponse = await fetch('https://dummyjson.com/todos')
      const result = await apiResponse.json()
      console.log(result)
      if(result?.todos && result?.todos?.length >0){
        setTodoList(result?.todos);
        setLoading(false)
      }
      else{
        setTodoList([]);
        setLoading(false)
      }
    }
    
    catch(e){
      console.log(e)     
      setErrorMsg('some error occured')
   } 
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
      console.log(getCurrentTodoId)
      try{
         const apiResponse =await fetch (`https://dummyjson.com/todos/${getCurrentTodoId}`);
         const details = await apiResponse.json() 
         console.log(details)
         if(details){
          setTodoDetails(details)
          setOpenDialog(true)
         }
         else{
          setTodoDetails(null)
          setOpenDialog(false)
         }
       }

      catch(error){
        console.log(error)
      }
  }
  
  
  /*run  on page load!*/

  useEffect(()=>{
    fetchListTodo()
  },[])

  return (
    <div className={classes.mainwrapper}>
      <h1 className ={classes.headerTitle}>Todo APP using material UI</h1>
      <div className={classes.todoListWrapper} >
          {todoList &&todoList.length>0? 
           todoList.map(todoItem=><TodoItem 
                          fetchDetailsOfCurrentTodo = {fetchDetailsOfCurrentTodo}
                          todo = {todoItem} />): null
                        }
      </div>
      <TodoDetails openDialog={openDialog}
                   todoDetails={todoDetails}
                   setOpenDialog={setOpenDialog} />
    </div>
  )
}
export default App
