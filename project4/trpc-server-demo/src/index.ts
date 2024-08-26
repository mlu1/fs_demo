import app from "./app"
import {dbconnect} from  "./database/connect";

dbconnect();

app.listen(process.env.PORT || 3000 ,() =>{
    console.log("Server is running")
})