import React ,{useEffect, useState} from 'react'
import AddNewTodo from './AddNewTodo';

const TodoList = ()=>{
    const [todos,setTodos] = useState([
        {text:'Pay Bills','id':1},
        {text:'Homework','id':2},
        {text:'Feed Cats','id':3}
    ])
    
    const [count,setCount] = useState(0)

    const addTodo = (text)=>{
        setTodos([...todos,
            {
                text,id: todos.length ? todos[todos.length - 1].id + 1 : 1, 
            }
        ]);
    };

   useEffect(()=>{
        console.log('use effect',todos);
   },[todos])

   useEffect(()=>{
    console.log('use effect',count);
    },[count])


    return (
        <div>
            <ul>
                {
                    todos.map((todo)=>{
                        return(
                            <li key = {todo.id}>{todo.text}</li>
                        )
                    })
                }
            </ul>
            <AddNewTodo addTodo = {addTodo}/>
            <button onClick={()=>setCount(count+1)}>Score:{count}</button>        
        </div>
    )
}

export default TodoList