const express=require('express');
const userRouter=require('./index')
const router = express.Router();
const jwt=require('jsonwebtoken')
const zod=require('zod');
require("dotenv").config();
const {authmiddleware}=require('../middleware')

const {User, Account}=require('../db');
const { default: mongoose } = require('mongoose');

// router.get('/balance',authmiddleware,async(req,res)=>{

//     const account=Account.findOne({
//         userId:req.userId
//     })

//     res.json({
//         balance:account.balance
//     })
// })

// router.get("/balance", authmiddleware, async (req, res) => {
//     const account = await Account.findOne({
//         userId: req.userId
//     });


     
//     res.json({
//         balance: account.balance
//     })
// });

router.get("/balance", authmiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    })

    res.json({
        balance: account.balance
        // userId:account._id
    })
});



// router.post('/transfer',authmiddleware,async(req,res)=>{


 

//     const {to,amount}=req.body;

//     const account=Account.findOne({
//         userId:req.userId
//     })

//     if(!account || account.balance<amount)
//     {
       
//         return res.status(400).json({
//             msg:'insufficient balance'
//         })
//     }

//     const toaccount=Account.findOne({
//         userId:to
//     })

//     if(!toaccount){
       
//         return res.status(400).json({
//             msg:'recievers account is not available'
//         })
//     }

//     await Account.updateOne({
//         userId:req.userId
//     },{$inc:{balance:-amount}})

//     await Account.updateOne({
//         userId:to
//     },{$inc:{balance:amount}})

   
//     res.json({
//         msg:'Tranfer successfull'
//     });


// })

router.post('/transfer', authmiddleware, async (req, res,next) => {
    try {
        const { to, amount } = req.body;

        // Find the sender's account
        const senderAccount = await Account.findOne({ userId: req.userId });

        // Check if sender's account exists and has sufficient balance
        if (  !senderAccount|| senderAccount.balance < amount) {
            return res.status(400).json({ msg: 'Insufficient balance or account not found' });
        }

        // Find the receiver's account
        const receiverAccount = await Account.findOne({ userId: to });

        // Check if receiver's account exists
        if (!receiverAccount) {
            return res.status(400).json({ msg: 'Receiver\'s account not found' });
        }

        // Perform the transfer
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } });
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } });

        res.json({ msg: 'Transfer successful' });
    } catch (error) {
        console.error('Error transferring funds:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});



module.exports=router;