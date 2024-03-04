const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://kumar4475priyanshu:grrF3ZqjqTmouHI8@cluster0.kz3fgly.mongodb.net/")


const userSchema=mongoose.Schema({
username:String,
password:String,
firstname:String,
lastname:String
})

const accountSchema=mongoose.Schema({
    userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    require:true
    },
    balance:{
        type:Number,
        require:true

    }
})

const Account=mongoose.model('Account',accountSchema)

const User=mongoose.model("User",userSchema);
module.exports={User,Account}