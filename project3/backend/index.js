import app from "./server.js"
import mongodb from "mongodb"

const MongoClient = mongodb.MongoClient
const mongo_username = ""
const mongo_password = ""

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@reviews.z4suer6.mongodb.net/?retryWrites=true&w=majority&appName=reviews`
const port = 8000


MongoClient.connect(
    uri,{
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true
    })
    .catch(err=>{
        console.error(err.stack)
        process.exit(1)
    }).then(async client=>{
        await ReviewsDAO.injectDB(client)
        app.listen(port,()=>{
            console.log( `listening on port ${port}`)
        })
    })
    

