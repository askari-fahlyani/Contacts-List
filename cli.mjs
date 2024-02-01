// import readline from 'readline/promises';
// import { stdin as input , stdout as output } from 'process';
// import fs from 'fs/promises'
// import {
//     loadContacts,
//     formatContactsListHandler,
//     generateNewContactId,
//     saveContactsList
// } from './services.js'


// const readlineInterface = readline.createInterface({input,output})

// export const contactsList = []

// const addNewContacts = async ()=>{
//     const firstName= await readlineInterface.question("First Name: ");
//     const lastName= await readlineInterface.question("Last Name: ");
//     const id = generateNewContactId()
//     const newContect = {
//         id:id,
//         firstName:firstName,
//         lastName:lastName
//     }
//     contactsList.push(newContect)
//     saveContactsList(contactsList)
//     quit()
// }
// const deleteContact = async()=>{
//     showContactsList()
//    const deleteId = await  readlineInterface.question('enter contact id:\n')
//     console.log(deleteId);
//    const deleteIndex = contactsList.findIndex(contat=>contat.id===Number(deleteId))
//    console.log('delete index is',deleteIndex);
//    if (deleteIndex>-1) {
//     contactsList.splice(deleteIndex,1)
//   await saveContactsList(contactsList)
//     console.log('contact is deleted');
//     readlineInterface.close()
//    }else{
//     console.log('there is no such a id');
//    }
// }
// const showContactsList = ()=>{
//     const formatedContactsList = formatContactsListHandler(contactsList)
//     console.log('formatedContactsList',formatedContactsList);
// }
// const  showOptionsList = async()=>{
//     console.log("n: Add new contact\nl:show contacts list\nq:quit\nd:delete Contact\ne: exit");
//     const action = await readlineInterface.question('choose one please: ')
// if (action==='n') {
//     await addNewContacts()
// } else if(action==="l"){
//     showContactsList()
// }else if(action==='d'){
//     deleteContact()
// }else{
//     quit()
//     return
// }
// }

// const quit = ()=>{
//     readlineInterface.close()
// }




// const incorrectInputHandling = async(askCorrectAnswer)=>{
//     const newConfirmation = await readlineInterface.question(askCorrectAnswer)
//     if (newConfirmation==='y') {
//         addNewContacts()
//     }else if(newConfirmation==='n'){
//         readlineInterface.close()
//     }else{
//         incorrectInputHandling(askCorrectAnswer)
//     }
   
// }
// const main = async ()=>{
//     const loadedContacts = await loadContacts()
//     contactsList.push(...loadedContacts)
//     console.log('contactsList');
//     showOptionsList()
// }
// await main()
