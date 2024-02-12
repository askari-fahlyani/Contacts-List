import pg from "pg";

const pool = new pg.Pool(
    {
        database:'LearningNode',
        user:'Mohammad',
        password:'12345'
    }
)

// export function query(text,params){
//     return pool.query(text,params)
// }
export const query =(text,params)=>{
    return pool.query(text,params)
}
// module.exports ={
//     query:(text,params)=>pool.query(text,params),
// };