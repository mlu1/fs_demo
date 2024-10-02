import {t} from "../trpc"
import {userRouter} from "./users"
/*
    NOTES
    -procedures that allows us to interact with the server
    -
*/

export const appRouter = t.router({
    sayHi:t.procedure.query(()=>{
        return  "Hi";
    }),
    logToServer:t.procedure.input(v =>{
        if(typeof v === "string")return v
        throw new Error("Invalid Input:Expected string")
    }).mutation(req => {
        console.log(`Client Says: ${req.input}`)
        return true;
    }),
})

