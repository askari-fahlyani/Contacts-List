import express from "express";
import { 
    getContacts,
    createContact,
    deleteContacts,
    updateContacts
 } from "../controllers/contacts.js";

const router = express.Router()

router.get('/',getContacts)
router.post('/new',createContact)
router.delete('/:id',deleteContacts)

router.put('/:id',updateContacts)



export default router