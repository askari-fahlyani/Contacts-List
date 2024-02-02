import fs from 'fs/promises'
const CONTACTS_lIST_FILE_PATH ='./data-contacts-list.json'
export const loadContacts = async()=>{
    try {
        const myData = await fs.readFile(CONTACTS_lIST_FILE_PATH,'utf-8')
        return JSON.parse(myData)
    } catch (error) {
        throw error
    }
    }
   export const saveContactsList = async(list)=>{
        try {
            const contactsListJson = JSON.stringify(list)
            await fs.writeFile(CONTACTS_lIST_FILE_PATH,contactsListJson)
           
        } 
        catch(err){
            throw err
        }    
    
}

    export const formatContactsListHandler = (contactsList) => {
        return contactsList.map(({id, firstName, lastName}) => `#${id} ${firstName} ${lastName}`).join('\n');
    }

   export const generateNewContactId = (contactsList)=>{
       const lastContact = contactsList[contactsList.length-1]
       const id = lastContact ? lastContact.id+ 1:0 ;
        return id
    }