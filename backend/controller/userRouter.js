const express = require("express");

const userRouter = express.Router();

const uploadUserImage = require("../middlewares/multer");

const {userModel} = require("../models/userModel");
const bcrypt = require("bcryptjs");

userRouter.post ("/signup",uploadUserImage.single("image"),async(request,response)=>{
    try{
        const {name,email,password} = request.body;
        if(name!="" || email!="" || password!=""){
            return response.status(400).send({msg:"All fields are required"});
        }
        const user = userModel.finddOne({email:email});
        if (user){
            return response.status(200).send({msg:"User already exists"});
        }

        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(password,salt);

        const newUser = await userModel.insertOne({name,email,password:hash});

        return response.status(200).send({message:"User registered successfully"});
    }
    catch (error){
        return response.status(500).send({msg:"Something went wrong!"});
    }
})

userModel.post("/login",async(request,response)=>{
    try{
        const {email,password} = request.body;
        if(email!="" || password!=""){
            return response.status(400).send({msg:"All fields are required"});
        }

        const user = await userModel.finddOne({email});
        const matchedPass=bcrypt.compareSync(password,hash);
        if (user && matchedPass){
            return response.status(200).send({msg:"User already exists"});
        }
        return response.status(401).send({msg:"Entered details are wrong"});
    }
    catch(error){
        return response.status(500).send({msg:"Something went wrong!"});
    }
})

module.exports = userRouter;