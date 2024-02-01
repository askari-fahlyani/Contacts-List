import express from "express";
import { formatContactsListHandler, loadContacts } from './services.js'

const router = express.Router()
const contactsList = []

router.get('/',(req,res)=>{
    if(req.query.format){
        const responseDAta = `<pre>${formatContactsListHandler(contactsList)}<pre/>`
        res.type('html')
        res.send(responseDAta)
        return
    }
    console.log('im here');
    res.send(contactsList)
})
const main = async ()=>{
    const loadedContacts = await loadContacts()
    contactsList.push(...loadedContacts)
    
}
await main()


export default router