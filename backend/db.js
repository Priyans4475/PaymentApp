const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/paytm")


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