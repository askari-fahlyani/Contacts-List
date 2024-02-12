 import { DataTypes } from "sequelize"
 const ContactModel = (sequelize)=>{
    return sequelize.define('contact',{
        first_name:{
            type:DataTypes.STRING(20),
            // allowNull:false
        },
        last_name:{
            type:DataTypes.STRING(20),
            // allowNull:false
        },
        mobile_phone:{
            type:DataTypes.STRING(15)
        },
        is_favorit:{
            type:DataTypes.BOOLEAN,
            defaultvalue:false
        },
        profile_picture:{
            type:DataTypes.BLOB,
            allowNull:true
        }
    })
}

export default ContactModel