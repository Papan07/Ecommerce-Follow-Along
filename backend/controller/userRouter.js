const express = require('express');
const userRouter = express.Router();
const uploadUserImage = require('../middleware/multer');
const {userModel} = require('../models/userModel');

userRouter.post('/signin',async(req, res) => {
    try{
        const {name, email, password, image} = req.body;
        if(name!= "" || email!="" || password!="" || image!=""){
            return res.status(400).send({message:"All fields are required"});
        }
        const user=await userModel.findOne({email:email});
        if(user){
            return res.status(200).send({message:"User already exists"});
        }
        const newUser = await userModel.insertOne({name, email, password});
        return res.status(200).send({message:"User created successfully", user:newUser});

    }catch(err){
      return res.status(500).send({message:"Somethiing went wrong"});
    }
});

userModel.post('/login',async(req, res) => {
    try{
        const {email, password} = req.body;
        if(email!= "" || password!=""){
            return res.status(400).send({message:"All fields are required"});
        }
        const user=await userModel.findOne({email:email, password:password});
        if(!user){
            return res.status(401).send({message:"Invalid credentials"});
        }
        return res.status(200).send({message:"Logged in successfully", user});

    }catch(err){
        return res.status(500).send({message:"Somethiing went wrong"});

    }
});





module.exports = userRouter;