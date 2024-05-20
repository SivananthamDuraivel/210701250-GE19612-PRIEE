const authmodel=require('../models/AuthModel')
const mongoose=require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer=require('nodemailer')

const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();
app.use(cookieParser());


const signup = async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        const existingName = await authmodel.findOne({ username: username });
        if (existingName) {
            return res.json("username already exists");
        }
        
        const existingEmail = await authmodel.findOne({ email: email });
        if (existingEmail) {
            return res.json("email already exists");
        }
        
        const hashPassword = await bcrypt.hash(password, 10);
        
        await authmodel.create({ username: username, email: email, password: hashPassword });
        return res.json("registered");
    } catch (err) {
        console.error(err);
        return res.status(500).json("Internal server error");
    }
};


const signin = async (req, res) => {
    const { email, password } = req.body;
    console.log("got signin req")
    try {
        const user = await authmodel.findOne({ email: email });
        
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch)
                return res.json("invalid password");    
                
        } else {
            return res.json("no such records");
        }
        const token = jwt.sign({username:user.username},process.env.KEY,{expiresIn:'1h'})
        res.cookie('token',token,{httpOnly:true,maxAge:360000})
        return res.json("valid user")
    } catch (err) {
        console.error(err);
        return res.status(500).json("Internal server error");
    }
    
};

const resetpassword = async(req,res)=>{
    
    const {email}=req.body;
    try{
        
        const user = await authmodel.findOne({email:email});
            if(!user)
                return res.json("user not registered")    
            
            const token = jwt.sign({id:user._id},process.env.KEY,{expiresIn:'5m'})
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'sivanantham1225@gmail.com',
                  pass: "hgch rdeq lnly vwml"
                }
              });
              
              var mailOptions = {
                from: 'sivanantham1225@gmail.com',
                to: email,
                subject: 'Reset your  password',
                text: `http://localhost:5173/newPassword/${token}`
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  res.json("can't send email")
                } else {
                   res.json("sent") 
                  console.log('Email sent: ' + info.response);
                }
              });
    }catch(err){
        console.error(err);
    }
}

const newPassword = async(req,res)=>{
    const token=req.params.token;
    const {password} =req.body;
    try{
        const decoded = jwt.verify(token,process.env.KEY)
        const id=decoded.id;
        const hashPassword =await bcrypt.hash(password,10)
        await authmodel.findByIdAndUpdate({_id:id},{password:hashPassword})
        return res.json("updated");
    }catch(err){
        console.error(err);
        return res.json("invalid token")
    }

}

const verify = async(req,res)=>{
    console.log("verified")
    res.json("verified")
};

const logout = async(req,res)=>{
    res.clearCookie('token')
    res.send("logged out");
}

module.exports={
    signup,
    signin,
    resetpassword,
    newPassword,
    verify,
    logout
}
