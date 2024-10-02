import express ,{Router as ExpressRputer} from "express"
import trpcExpressAdapter from "@trpc/server/adapters/express"


const expressRouter  = ExpressRputer();
const app = express();

const appRouter = router({
    todo:todoRouter,
    
})

app.use("/trpc",)