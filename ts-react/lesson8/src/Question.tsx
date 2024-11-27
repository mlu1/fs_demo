import { useState } from "react"

type QuestionProps = {
    key:number,
    question:string,
    answer:string,
  }
  
const Question =({key,question,answer}:QuestionProps)=>{
    const [hidden,settoggleHidden] = useState<boolean>(true)
    return(
        <article className="question">
            <header>{question}</header>
            <p className="answer">
                <span className={`${hidden?'blurred':'visible'}`}></span>
            </p>
            <footer>
                    <button onClick={()=>settoggleHidden(!hidden)}></button>
            </footer>
        </article>
    )
}

export default Question