const express=require('express');
const userRouter=require('./index')
const router=express.Router();
const jwt=require('jsonwebtoken')
const zod=require('zod');
require("dotenv").config();

const {User}=require('../db');
// const {JWT_SECRET} = require('../config.env');

const signupSchema = zod.object({
    username: zod.string().email(),
    password:zod.string(),
    firstname:zod.string(),
    lastname:zod.string()
  });


router.post("/signup",async(req,res,next)=>{
    const body=req.body;
    const {success}=signupSchema.safeParse(body);
    if(!success )
    {
        return res.json({
            message:'user already exist'
        })
    }

    const user=User.findOne({
        username:body.username
    })

    if(user._id){
        return res.json({
            message:'user already exist'
        })
    }

    const dbUser=await User.create(body);
    const token=jwt.sign({
        userId:dbUser._id
    },process.env.JWT_SECRET)

    res.json({
        msg:'user created successfully',
        token:token
    })
    
});

module.exports=router;