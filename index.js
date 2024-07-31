import express from "express";
const app = express();
app.get('/',(req,res) => {
    res.json({message:'Backend has been run successfully!-testing with new build jinkins pipeline!'})
})
app.listen(3000);
