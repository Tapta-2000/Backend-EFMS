const mongoose=require("mongoose");
foodschema=new mongoose.Schema({
    id:Number,
    name:String,
    type:String,
    image:String,
    price:Number,
    description:String
})

module.exports=mongoose.model('Myfoods',foodschema,'Myfoods'); 