import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import router from './routes/contacts.js';
import { sequelize } from '../models/index.js'
import loggerMiddleware from './middlewares/logger.js';
import serverConfig from '../configs/server.js';

dotenv.config()
const app = express();
export const contactsList = []
app.disable('etag')

try{
    await sequelize.sync({alter:true})
}catch(error){
    console.log(error);
    throw error
}
app.use(bodyParser.urlencoded({extended:false}))
app.use(loggerMiddleware)
app.use(router)


const main = async ()=>{
    app.listen(serverConfig.port,()=>{
        console.log('server is runing on 3000');
    })
}

await main()