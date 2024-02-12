import { Sequelize } from "sequelize";
import ContactModel from "./contact.js";
import ContactCategory from "./contactCategory.js";

const sequelize = new Sequelize({
    username:"Mohammad",
    password:'12345',
    database:'LearningNode',
    dialect:'postgres',
    logging:true
})
export const contact = ContactModel(sequelize)
export const contactCategory = ContactCategory(sequelize)

contact.hasOne(contactCategory);
contactCategory.belongsTo(contact)
export{sequelize}