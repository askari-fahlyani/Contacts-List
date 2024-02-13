import { contact } from '../../models/index.js';
export const getContacts=async(req,res)=>{
    try {
        const contacts = await contact.findAll();
        console.log('contacts are',contacts);
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
}

export const createContact =async(req,res)=>{
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
}

export const deleteContacts = async(req,res)=>{
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
}
export const updateContacts = async(req,res)=>{
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
    
  }