import React from "react"

type BoxProps = {children:React.ReactNode}

const Box = ({children}:BoxProps)=>{
    return (
        <section style= {{padding:"1em",border:"5px solid purple"}}>
            {children}
        </section>
    )
}

export default Box