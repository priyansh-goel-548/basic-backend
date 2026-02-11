//require('dotenv').config({path: './env'})
//or
import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config({
    path: './env'
})
connectDB()


//for connecting database
// function connectDB(){}

/*
const app = express()

(async ( )=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Errror", (error) => {
            console.log ("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listenning on port &{prcess.env.PORT}`);
        })
        
    } catch (error) {
        console.error("Error: ", error)
        throw err
    }
})()

*/