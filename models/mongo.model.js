const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/EFMS', {

    useNewUrlParser: true,

    useUnifiedTopology: false

})

    .then((result) => {

        console.log("connect");
        

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