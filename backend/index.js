const express=require('express');
const app=express();
const PORT=3000;
const cors =require('cors');
const mainrouter=require('./routes/index')




app.use(cors())
app.use(express.json())
app.use("/api/v1",mainrouter);
// app.use("/api/account",router2);
// app.use(router3);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
