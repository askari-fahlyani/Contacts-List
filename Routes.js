import express from "express";
import {contactsList} from './index.js'

import { formatContactsListHandler, loadContacts,saveContactsList,generateNewContactId } from './services.js'

const router = express.Router()

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
router.post('/new',(req,res)=>{
    const {firstName,lastName} = req.body;
    const id = generateNewContactId(contactsList)
    const newContect = {
        id:id,
        firstName:firstName,
        lastName:lastName
    }
    contactsList.push(newContect)
    saveContactsList(contactsList)
    res.send('contact saved')
})
router.delete('/:id',(req,res)=>{
    if (contactsList.length<1) {
        res.status(400).send({
            message:'there is no contact in the list'
        })
        return
    }
    console.log("params id",req.params.id);
    console.log('contact list',contactsList);
    const contactIndex = contactsList.findIndex(({id})=>id===Number(req.params.id))
    console.log('delete index is',contactIndex);
    if (contactIndex<0) {
        res.status(400).send({
            message:'invalid Id'
        })
        return
    }
        contactsList.splice(contactIndex,1)
        saveContactsList(contactsList)
        res.send(`Contact #${req.params.id} deleted`)

})

router.put('/:id',(req,res)=>{
  if(contactsList.length<1){
    res.status(400).send({
        message:'there is no any contact i contacts List'
    })
    return
  }
  const contactIndex = contactsList.findIndex(({id})=>id===Number(req.params.id))
  console.log('contact index is ',contactIndex);
  if(contactIndex<0){
    res.status(400).send({
        message:"invalid Id"
    })
    return
  }
  const {firstName,lastName} = req.body
  const contact = contactsList[contactIndex]
  console.log('contact is',contact);
  const updatedContact = {
    ...contact,
    firstName:firstName||contact.firstName,
    lastName:lastName||contact.lastName
  }
  contactsList.splice(contactIndex,1,updatedContact)
  saveContactsList(contactsList)
  res.send({message:`updated contact is ${updatedContact.firstName} ${updatedContact.lastName}`})
})



export default router