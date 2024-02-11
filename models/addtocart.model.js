const mongoose=require('mongoose');

const addtocart=new mongoose.Schema(
    {
        anyoffer:String,
        image:String,
        category:String,
        model:String,
        mrp:Number,
        price:String,
        star:Number

    }
);

module.exports=mongoose.model('addtocartproducts',addtocart,'addtocartitems');