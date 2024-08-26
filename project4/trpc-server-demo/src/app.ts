import express,{Router as ExpressRouter} from "express"
import * as trpcExpressAdapter from "@trpc/server/adapters/express"
const expressRouter  = ExpressRouter()
const app  =express();
import { createContext, router } from "./trpc";

const appRouter = router({
    todo:todoRouter,
})


app.use("/trpc",trpcExpressAdapter.createExpressMiddleware({
    router:appRouter,
    createContext(){},
})
);

app.use(expressRouter);

export default app;