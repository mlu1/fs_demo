import express from "express"
import cors from "cors"
import { createExpressMiddleware } from "@trpc/server/adapters/express"
import {appRouter} from "./routers/index"
import {createContext} from "./context"

//app specific interface
const app = express()
app.use(cors({origin:"http://localhost:5175"}))
app.use("/trpc",createExpressMiddleware({
    router:appRouter,
    createContext
    }))

app.listen(3000)
export type AppRouter = typeof appRouter
