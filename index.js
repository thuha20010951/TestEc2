const express = require("express");

const app = express();

app.get("/", function(req,res) {
    res.json("Hello world!!!")
})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})