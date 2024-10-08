import {t} from "../trpc"
import {z} from "zod"

const userProcedure = t.procedure.input(z.object({userId:z.string()}))

export const userRouter = t.router({
    get:userProcedure.query(({input})=>{
        return {id:input.userId}
    }),
    update:userProcedure.input(z.object({name:z.string()}))
    .output(z.object({name:z.string(),id:z.string()}))
    .mutation(req =>{
        console.log(`Updating user ${req.input.userId} to the name ${req.input.name})`)
        return {id:req.input.userId,name:req.input.name}
    })
})