 const loggerMiddleware = (req,resp,next)=>{
    console.log('request',req.method,req.url);
    next()
}
export default loggerMiddleware