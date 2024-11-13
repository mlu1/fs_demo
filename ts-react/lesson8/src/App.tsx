import {useState} from 'react';
import {questions} from './questions'
import Question from './Question'


const  App =()=>{
  return(
    <main>
      {questions.map((q)=>(
        <Question question={q.question} answer={q.answer}/>
      ))}
    </main>
  )
}

export default App;
