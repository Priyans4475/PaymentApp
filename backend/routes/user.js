const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken')
const zod=require('zod');
require("dotenv").config();
const {authmiddleware}=require('../middleware')

const {User, Account}=require('../db');

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


    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
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

    // const users = await User.find({
    //     $or: [{
    //         firstname: {
    //             "$regex": filter
    //         }
    //     }, {
    //         lastname: {
    //             "$regex": filter
    //         }
    //     }]
    // },{sort:{$natural:-1}})
    const users = await User.find({
        $or: [
          { firstname: { "$regex": req.query.filter } },
          { lastname: { "$regex": req.query.filter } }
        ]
      }).sort({ $natural: -1 });

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})

// router.get('/', async (req, res) => {
//     

//     try {

//         // Check if user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Check if password is correct
//         const isPasswordValid = user.password;
//         if (!isPasswordValid) {
//             return res.status(401).json({ message: 'Invalid password' });
//         }

//         // Generate JWT token
//         const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         // Respond with token

//         res.json({ 
           
//             token:token });
//     } catch (error) {
//         console.error('Error occurred during sign-in:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });



router.get('/',async(req,res)=>{
    try{
     const users=await User.find()
    
    res.json(users);
 }
    catch (err) {
     console.error('Error fetching data:', err);
     res.status(500).json({ error: 'Internal Server Error' });
 
    }
     
 
 })
 
const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})
router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
        
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, process.env.JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})
module.exports=router;