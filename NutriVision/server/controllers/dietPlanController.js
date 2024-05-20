const dietplan=require('../models/dietPlanModel')
const mongoose=require('mongoose')


var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
// app.get('/', function(req, res) {
//    console.log(req.cookies[token]);
// })

//get all
const getAllPlan=async (req,res)=>{
    const table=await dietplan.find({username:req.username}).sort({ updatedAt: -1 })
    res.status(200).json(table)
}
//get one
const getOnePlan=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({error:"id type mismatch erorr"})
    }
    const table=await dietplan.findById(id)
    if(!table)
        return res.status(400).json({error:"no plan found"})
    res.status(200).json(table)
}

//create plan
const createPlan = async (req,res)=>{
    const{
        mbreakfast,
        mlunch,
        mdinner,
        msnacks,
        tbreakfast,
        tlunch,  
        tdinner,
        tsnacks,
        wbreakfast,
        wlunch,
        wdinner,
        wsnacks,
        thbreakfast,
        thlunch,
        thdinner,
        thsnacks,
        fbreakfast,
        flunch,
        fdinner,
        fsnacks,
        sbreakfast,
        slunch,
        sdinner,
        ssnacks,
        subreakfast,
        sulunch,
        sudinner,
        susnacks
    }=req.body;
    try{
        const dp= await dietplan.create({
        username:req.username,
        mbreakfast,
        mlunch,
        mdinner,
        msnacks,
        tbreakfast,
        tlunch,  
        tdinner,
        tsnacks,
        wbreakfast,
        wlunch,
        wdinner,
        wsnacks,
        thbreakfast,
        thlunch,
        thdinner,
        thsnacks,
        fbreakfast,
        flunch,
        fdinner,
        fsnacks,
        sbreakfast,
        slunch,
        sdinner,
        ssnacks,
        subreakfast,
        sulunch,
        sudinner,
        susnacks
        })
        res.status(200).json(dp);
    }
    catch(err){
        res.status(400).json("error");
    }
}

//delete one
const deletePlan=async (req ,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({error:"id type mismatch erorr"})
    }
    const del=await dietplan.findOneAndDelete({_id:id})
    if(!del)
        return res.status(400).json({error:"id not found"})
    res.status(200).json({msg:"plan deleted successully"})
}
//update one
const updatePlan=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({error:"id type mismatch erorr"})
    }
    const up = await dietplan.findOneAndUpdate({_id:id},{...req.body})
    if(!up)
        return res.status(400).json({error:"id not found"})
    res.status(200).json(up)
}


module.exports={
    createPlan,
    getAllPlan,
    getOnePlan,
    deletePlan,
    updatePlan
}