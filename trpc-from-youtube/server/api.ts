import express from "express"
import cors from "cors"
import {initTRPC} from "@trpc/server"

const t = initTRPC.create()

/*
    NOTES
    -procedures that allows us to interact with the server
    -
*/

t.router({
    sayHi:t.procedure.query(()=>{
        return  "Hi"
    }),
    logToServer:t.procedure.input(v =>{
        if(typeof v === "string")return v
    })
})

const app = express()
app.use(cors({origin:"http:/localhost:5173"}))
app.listen(3000)

console.log("Hi")