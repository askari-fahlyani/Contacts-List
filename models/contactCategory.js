import { DataTypes } from "sequelize"

const ContactCategory = (sequelize)=>{
    return sequelize.define('contactCategory',{
        name:{
            type:DataTypes.STRING(20)
        }
    })
}

export default ContactCategory