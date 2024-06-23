const mongoose = require('mongoose');
const url = "mongodb+srv://tapta_s_d:Jagu7969%4092@cluster0.gbcf12o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url, {

    useNewUrlParser: true,

    useUnifiedTopology: false

})

    .then((result) => {

        console.log("connected with Mongodb");
        

    })

    .catch((error) => {

        console.log(error);

    })

empschema = new mongoose.Schema(
    {
        name: String,
        empid: Number,
        mob: Number,
        email: String,
        job: String,
        city: String,
        state: String,
        pincode: Number,
        textarea: String,
        address: String,
        gender: String,
        monday: String,
        tuesday: String,
        wednesday: String,
        thrusday: String,
        friday: String,
        saturday: String,
        sunday: String,
        accomodation: String,
        morning: String,
        evening: String,
       
        id: Number
    }
);

module.exports = mongoose.model('message', empschema,'Employeeform')