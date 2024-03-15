import { DataSource } from "typeorm"
import path from "path";

export async function getDataSource(){
    const appDataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        port: Number(process.env.PORT_DB),
        username: process.env.USER_NAME_DB,
        password: process.env.USER_NAME_PWD,
        database: "DEMO_API",
        entities: [
            path.join(__dirname, "../models/**.ts")
        ],
        synchronize: true
    })
    try{
        await appDataSource.initialize()
        console.log("DB initialized")
        return appDataSource
    }catch (err) {
        console.error("DB initialization failed")
        console.error(err)
    }
    
    

} 