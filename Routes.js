import express from "express";
import {contactsList} from './index.js'
import {query} from './db.js'
import { contact } from './models/index.js';


import { formatContactsListHandler, loadContacts,saveContactsList,generateNewContactId } from './services.js'
import { where } from "sequelize";

const router = express.Router()

router.get('/',async(req,res)=>{
   try {
    const contacts = await contact.findAll();
    console.log('contacts are',contacts);
    // const contactsListDB=await query('select * from contacts')
    if(req.query.format){
        const responseDAta = `<pre>${formatContactsListHandler(contacts)}<pre/>`
        res.type('html')
        res.send(responseDAta)
        return
    }
    console.log('im here');
    res.send(contacts)
   } catch (error) {
    res.status(500).send({
        message:'something went wrong',error
    })
   }
})
router.post('/new',async(req,res)=>{
    const {first_name,last_name,mobile_phone,is_favorit}=req.body
    console.log(first_name);
    try {
       
        const {id} =await contact.create({
            first_name,
            last_name,
            mobile_phone,
            is_favorit
        })
        res.send(`the contact #${id} ${first_name} ${last_name} is created`)
    } catch (error) {
        res.status(500).send({
            message:'something went rong',
            error
        })
    }
})
router.delete('/:id',async(req,res)=>{
    const idValidation = async()=>{
        const idToFind =req.params.id
        const contactExists = await contact.findOne({ where: { id: idToFind } });
        return {idExist:contactExists!==null,
            foundId:idToFind}
    }
const {idExist,foundId}=await idValidation()
    if (idExist) {
        try {
           await contact.destroy
            ({where:{id:foundId}}) 

            res.send(`contact #${foundId} deleted`);
        } catch (error) {
            res.status(400).send({
                message:'something went wrong',
                error
            })
        }
    }else{
        res.send({
            messagge:'there is no such a contact'
        })
        return
    }

    //  try {
    //     contact.destroy({
    //         where:{
    //             id:id
    //         }
    //      })
    //  } catch (error) {
    //     res.status(400).send({
    //         message:'something went wrong',
    //         error
    //     })
     
     // if (contactsList.length<1) {
    //     res.status(400).send({
    //         message:'there is no contact in the list'
    //     })
    //     return
    // }
    // console.log("params id",req.params.id);
    // console.log('contact list',contactsList);
    // const contactIndex = contactsList.findIndex(({id})=>id===Number(req.params.id))
    // console.log('delete index is',contactIndex);
    // if (contactIndex<0) {
    //     res.status(400).send({
    //         message:'invalid Id'
    //     })
    //     return
    // }
    //     contactsList.splice(contactIndex,1)
    //     saveContactsList(contactsList)
    //     res.send(`Contact #${req.params.id} deleted`)

})

router.put('/:id',async(req,res)=>{
  const {first_name,last_name,is_favorit,mobile_phone} = req.body
  console.log(req.params.id);
 if (req.params.id){
    try {
        await contact.update({
            first_name,
            last_name,
            is_favorit,
            mobile_phone
          },
          {
            where:{id:req.params.id}
          }
          )
          res.send(`the contact #${req.params.id} is modified`)
     } catch (error) {
        res.status(400).send({
            message:'something went wrong',
            error
        })
     }
 }else{
    res.send('there is no such a contact')
    return
 }
  
})



export default router