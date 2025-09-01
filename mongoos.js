const express=require('express')
const mongoose=require('mongoose')
port=3000
async function connection(){
    await mongoose.connect('mongodb+srv://kavyabarikai09_db_user:q5SBAtg1m3Muoxqt@cluster0.j1ok2ij.mongodb.net/');
}

//mongoose step 3
const usernameschema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
        minlength: 3 
    },
    email:{
        type:Number,
        require:true,
        unique:true
    },
    password:{
        type:Number,
        require:true,
        minlength: 6
    },
    createdAt:{
        type:Date,
        default: Date.now
    }

})

// mongoose step 4

let usermodel=mongoose.model('user',usernameschema)
connection();
console.log("The db connected succesfully");