import express from 'express'
import bodyParser from 'body-parser';
import router from './Routes.js';
import { generateNewContactId,loadContacts,saveContactsList } from './services.js';

const app = express();
export const contactsList = []
app.disable('etag')
const loggerMiddleware = (req,resp,next)=>{
    console.log('request',req.method,req.url);
    next()
}

app.use(bodyParser.urlencoded({extended:false}))
app.use(loggerMiddleware)
app.use(router)


const main = async ()=>{
    const loadedContacts = await loadContacts(contactsList)
    contactsList.push(...loadedContacts)
    app.listen(3000,()=>{
        console.log('server is runing on 3000');
    })
}

await main()