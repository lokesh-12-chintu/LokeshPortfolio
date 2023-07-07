const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Registeruser = require("./model");
const jwt = require('jsonwebtoken');
const middleware = require('./middleware');
const cors = require('cors');

mongoose.connect("mongodb+srv://lokesh2001jitta:lokesh@cluster0.8s0p0pi.mongodb.net/?retryWrites=true&w=majority").then(
    () => console.log("DB connection established")
)

app.use(cors({origin:"*"}))

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use(express.json());

app.post("/register",async(req,res)=>{
    try{
        const {username,birthdate,mobileno,yearofgraduation,email,password,confirmpassword} = req.body;
        let exist = await Registeruser.findOne({email})
        if(exist){
            return res.status(400).send('User Already Exist')
        }
        if(password != confirmpassword){
            return res.status(400).send('Password are not matching')
        }
        let newUser = new Registeruser({
            username,
            birthdate,
            mobileno,
            yearofgraduation,
            email,
            password,
            confirmpassword
        })

        await newUser.save();
        res.status(200).send('Registered Successfully')

    }catch(err){
        console.log(err)
        return res.status(500).send('Internal Server Error')
    }
})

app.post('/login',async(req,res) => {
    try{
        const {email,password} = req.body;
        let exist = await Registeruser.findOne({email});
        if(!exist){
            return res.status(400).send('User Not Found')
        }
        if(exist.password !== password){
            return res.status(400).send('Invalid credentials');
        }
        let payload = {
            user:{
                id:exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
            (err,token) => {
                if(err) throw err;
                return res.json({token})
            })
    }
    catch(err){
        console.log(err)
        return res.status(500).send('Server Error')
    }
})

app.get('/myprofile',middleware,async(req,res) => {
    try{
        let exist = await Registeruser.findById(req.user.id)
        if(!exist){
            return res.status(400).send('User Not Found')
        }
        res.json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})
 

app.listen(5003, () => {
    console.log('Server Running....')
})