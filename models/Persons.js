const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:Number
    },
    age:{
        type:Number,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    }
})



module.exports = mongoose.model('Person', PersonSchema);