const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello i am from backend");
})

module.exports = app;