const mongoose=require("mongoose");
feedschema=new mongoose.Schema({
    one:String,
    two:String,
    third:String,
    four:String,
    five:String,
    six:String,
    seven:String,
    eight:String,
    nine:String,
    ten:String
})

module.exports=mongoose.model('feedback',feedschema,'feedback');