const mongoose=require('mongoose')

const signingschema=new mongoose.Schema(
    {
        firstname:String,
        lastname:String,
        email:String,
        password:String
    }
)  

module.exports=mongoose.model('Signin',signingschema,'Signin');