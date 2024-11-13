import React from "react"
import { useState } from "react"

type QuestionProps = {
    question:string,
    answer:string
  }
  
const Question =({question,answer}:QuestionProps)=>{
    const [hidden,toggleHidden] = useState(true)
    return(
        <article className="question">
            <header>{question}</header>
            <p className="answer">
                <span className={`${hidden?'blurred':'visible'}`}></span>
            </p>
            <footer>
                    <button onClick={()=>toggleHidden(!hidden)}></button>
            </footer>
        </article>
    )
}

export default Question