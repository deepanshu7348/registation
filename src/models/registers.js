const mongoose = require("mongoose");



const employeeSchema = new mongoose.Schema({
   firstname:{
    type:String,
    required:true
   }, 
   lastname:{
    type:String,
    required:true
   }, 
   email:{
    type:String,
    required:true,
    unique:true
   }, 
   countery:{
    type:String,
    required:true,
    unique:true
   }, 
   state:{
    type:String,
    required:true,
   }, 
   city:{
    type:String,
    required:true,
   }, 
   gender:{
    type:String,
    required:true,
   }, 
   birthday:{
    type:Number,
    required:true,
   }, 
   age:{
    type:Number,
    required:true,
   }, 
})


const Register = new mongoose.model("Registers",employeeSchema);

module.exports=Register;