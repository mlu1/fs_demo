import express ,{Router as ExpressRputer} from "express"


const expressRouter  = ExpressRputer();
const app = express();

const appRouter = router({
    todo:todoRouter,
    
})

app.use("/trpc",)