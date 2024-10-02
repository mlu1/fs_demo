import { createTRPCProxyClient, httpBatchLink } from "@trpc/client" ;
import {AppRouter} from "../../server/api"
import { link } from "fs";
import {userRouter} from "./users"


const client = createTRPCProxyClient<AppRouter>({
    links:[httpBatchLink({
        url:"http://localhost:3000/trpc"
    })]
})

async function main() {
    const result = await client.sayHi.query()
    console.log(result)
}

async function AnotherMain() {
    const results = await client.logToServer.mutate("Mluleki")
    console.log(results)  
}

async function UsersCall() {
    const userResults = await 
    console.log(userResults)
}

main()
AnotherMain()
UsersCall()