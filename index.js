import express from "express";
const app = express();
app.get('/',(req,res) => {
    res.json({status:200,message:'backend'})
})
app.listen(3000);