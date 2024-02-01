import express from 'express'
import router from './Routes.js';

const app = express();

app.disable('etag')
const loggerMiddleware = (req,resp,next)=>{
    console.log('request',req.method,req.url);
    next()
}

app.use(loggerMiddleware)
app.use(router)

const main = async ()=>{
    app.listen(3000,()=>{
        console.log('server is runing on 3000');
    })
}

await main()