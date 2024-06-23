
const express=require("express");
const app=express();
cors=require("cors")

bodyparser=require("body-parser");
jsonparser=bodyparser.json();



const mongodata=require('./models/mongo.model');
const newfood=require('./models/foods.model');
const signin=require('./models/signin.model');
app.use(cors());
app.use(express.json());
 

app.get('/Employeeform',async(req,res)=>
{
    const data=await mongodata.find();
    res.send(data);
    
})

app.get('/Myfoods',async(req,res)=>
{
    const foods=await newfood.find();
    res.send(foods);
})

app.delete('/Myfoods/:id',async(req,res)=>
{
    try{

        console.log(req.params.id);
    
    const neu=await newfood.findByIdAndDelete(req.params.id)
    if(!req.params.id)
    {
        return res.status(300).send()
    }
    res.send(neu);
}
catch(e)
{
    res.status(500).send(e) 
}
})




app.delete('/Employeeform/:id',async(req,res)=>
{
    try{

        console.log(req.params.id);
    
    const neu=await mongodata.findByIdAndDelete(req.params.id)
    if(!req.params.id)
    {
        return res.status(300).send()
    }
    res.send(neu);
}
catch(e)
{
    res.status(500).send(e) 
}
})


app.get('/Signin',async(req,res)=>
{
    const signindata=await signin.find();
    res.send(signindata);

})

app.post('/Signin',jsonparser,(req,res)=>
{
    const sign=new signin(
        {
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:req.body.password

        }
    )
    sign.save().then((val)=>
    {
        console.log(val);
    }).catch((error)=>
    {
        if(error)
        {
            console.log(error);
        }
    })
})



app.post('/Myfoods',(req,res)=>
{
    const varfood=new newfood(
        {
            id:req.body.id,
            name:req.body.name,
            type:req.body.type,
            image:req.body.image,
            price:req.body.price,
            description:req.body.description

        }
    )
    varfood.save().then((val)=>
    {
        console.log(val);
    }).catch((error)=>
    {
        if(error)
        {
            console.log(error);
        }
    })
})

const feedback=require('./models/feedback.model');

app.post('/feedback',jsonparser,(req,res)=>
{
    const data=new feedback({
        one:req.body.one,
        two:req.body.two,
        third:req.body.third,
        four:req.body.four,
        five:req.body.five,
        six:req.body.six,
        seven:req.body.seven,
        eight:req.body.eight,
        nine:req.body.nine,
        ten:req.body.ten


    })
    data.save().then((val)=>
    {
        console.log(val);
    }).catch((er)=>
    {
        console.log(er);
    })
})

app.post('/Employeeform',jsonparser,(req,res)=>
{
    const tempdata= new mongodata({
        name: req.body.name,
        empid: req.body.empid,
        mob: req.body.mob,
        email: req.body.email,
        job: req.body.job,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        textarea: req.body.textarea,
        address: req.body.address,
        gender: req.body.gender,
        monday: req.body.monday,
        tuesday: req.body.tuesday,
        wednesday: req.body.wednesday,
        thrusday: req.body.thrusday,
        friday: req.body.friday,
        saturday: req.body.saturday,
        sunday: req.body.sunday, 
        accomodation: req.body.accomodation,
        morning: req.body.morning,
        evening: req.body.evening,
       id: req.body.id

    })
    tempdata.save().then((val)=>
    {
        console.log(val);
    }).catch((er)=>
    {
        console.log(er);
    }
    )
})

const product=require('./models/products.model');
// app.post('/products',(req,res)=>
// {
//     const proddata=new product({
//         anyoffer:req.body.anyoffer,
//         image:req.body.image,
//         category:req.body.category,
//         model:req.body.model,
//         mrp:req.body.mrp,
//         price:req.body.price,
//         star:req.body.star
//     })
//     proddata.save().then(val=>
//         {
//             console.log(val);
//         }).catch(res=>
//             {
//                 console.log(res)
    
//             })
// })


app.post('/products',(req,res)=>
{
    const myobj=new product({...req.body});
    myobj.save().then(res=>
        {
            console.log(res);
        }).catch((er)=>
        {
            console.log(er);
        })
}) 


app.get('/products',async(req,res)=>
{
    const products=await product.find();
    res.send(products);
    console.log(products);

})

const cartmodel=require('./models/addtocart.model');

app.post('/addtocartitems',(req,res)=>
{
    const myobj=new cartmodel({...req.body});
    myobj.save().then(val=>
        {
            console.log(val);
        }).catch((er)=>
        {
            console.log(er);
        })
})

app.get('/addtocartitems',async(req,res)=>
{
    const cart=await cartmodel.find();
    res.send(cart);
    console.log(cart);
})
 
app.listen(3000);
 