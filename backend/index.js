const express=require('express');
const app=express();
const PORT=8080;
const cors =require('cors');
const mainrouter=require('./routes/index')




app.use(cors())
// // const cors = require('cors')
// const corsOption = {
//     origin: ['http://localhost:3000'],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
// }
// app.use(cors(corsOption));
app.use(express.json())
app.use("/api/v1",mainrouter);


app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
