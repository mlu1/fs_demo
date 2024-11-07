import { useEffect, useState } from 'react';

function HookUseState() {
  const [count,setCount] =useState({
    num:1,
    id:'abc'
  })

  const handleAdd = ()=>{
      setCount((prev)=>{
        return{
          ...prev,
          num:prev.num +1,
        }
      })
  }

  const handleSubtract = ()=>{
    setCount((prev)=>{
      return{
        ...prev,
        num:prev.num -1,
      }
    })
  }
  
  useEffect(()=>{
    console.log('i ran')
  },[])

  return (<div className='A'>
    <button onClick={handleSubtract}>-</button>
    <span>{count.num}</span>
    <span>{count.id}</span>
    <button onClick={handleAdd}>+</button>
  </div>
  );
}

export default HookUseState;
