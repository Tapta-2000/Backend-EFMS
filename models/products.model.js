const mongoose=require('mongoose');
const product=new mongoose.Schema({
    anyoffer:String,
    image:String,
    category:String,
    model:String,
    mrp:Number,
    price:Number,
    star:Number 
});

module.exports=mongoose.model('myproducts',product,'products')