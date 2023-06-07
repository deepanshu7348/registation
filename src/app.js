const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const {json} = require("express");
const Register = require("./models/registers");
const port = process.env.PORT || 3000;


const static_path = path.join(__dirname,"../public");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/register",async()=>{
    try {
        const RegisterEmployee = new Register({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            countery:req.body.countery,
            state:req.body.state,
            city:req.body.city,
            gender:req.body.gender,
            birthday:req.body.birthday,
            age:req.body.age,
        })
        const registerd = await RegisterEmployee.save();
        res.status(201).render(index);
    } catch (error) {
        res.status(400).send(error);   
    }

})

app.listen(port,()=>{
    console.log(`server start ${port}`);
})












//node src/app.js