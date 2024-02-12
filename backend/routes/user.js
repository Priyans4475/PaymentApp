const express=require('express');
const userRouter=require('./index')
const router=express.Router();
const jwt=require('jsonwebtoken')
const zod=require('zod');
require("dotenv").config();
const {authmiddleware}=require('../middleware')

const {User, Account}=require('../db');
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
            message:'user invalid data of user'
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
    const userId = dbUser._id;
    await Account.create({
        
        userId,
        balance:1+Math.random()*10000,
    })

    const token=jwt.sign({
        userId:dbUser._id
    },process.env.JWT_SECRET)

    res.json({
        msg:'user created successfully',
        token:token
    })
    
});

// router.put("/update",authmiddleware,async (req,res)=>{
//     const body=req.body;
//     const {success}=updateBody.safeParse(body);
//     if(!success){
//         res.status(411).json({
//             message:'error while updating data'
//         })
//     }

//     await User.updateOne(req.body,{
//         id:req.userId
//     })

//     res.json({
//         msg:'updated data successfully'
//     })

// })

const updateBody = zod.object({
   
    password:zod.string().optional(),
    firstname:zod.string().optional(),
    lastname:zod.string().optional()
  });

router.put("/update", authmiddleware, async (req, res) => {
    const body = req.body;
    // Assuming updateBody is a validation schema defined elsewhere
    const { success } = updateBody.safeParse(body);

    if (!success) {
        return res.status(400).json({
            message: 'Invalid data provided for update'
        });
    }

    try {
        // Assuming User is your Mongoose model
        const result = await User.updateOne({ _id: req.userId }, body);
      
            return res.json({
                msg: 'Data updated successfully'
            });
        
    } catch (error) {
        console.error('Error occurred while updating data:', error);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
});




router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if password is correct
        const isPasswordValid = user.password;
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Respond with token
        res.json({ 
           
            token:token });
    } catch (error) {
        console.error('Error occurred during sign-in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports=router;