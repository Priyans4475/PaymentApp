const mongoose=require('mongoose')
// mongoose.connect("mongodb+srv://kumar4475priyanshu:grrF3ZqjqTmouHI8@cluster0.kz3fgly.mongodb.net/")
// mongoose.connect("mongodb://127.0.0.1:27017/paytm")

mongoose.connect("mongodb+srv://kumar4475priyanshu:grrF3ZqjqTmouHI8@cluster0.kz3fgly.mongodb.net/").then(()=>{
    console.log('database connected successfully');
})
.catch((err)=>{
    console.log(err);

})
// mongodb://127.0.0.1:27017/myEcommdb
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