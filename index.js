const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const database = require("./server/src/controllers/Users/Users");


const app = express();
app.use(bodyParser.json());
const Port = process.env.PORT || 5000;
app.use(cors());

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
//app.use(bodyParser.json({limit: '50mb'}))

app.get("/", (req, res) =>{
    res.status(200).send(database)
    console.log(database)
})

//Post method for user SignIn
app.post("/SignIn", (req, res) =>{
    if (req.body.email === database[0].email && req.body.password === database[0].password){
        res.status(200).json("success")
    }else{
        res.status(400).json("Invalid login")
    }
})
app.listen(Port, ()=>{
    console.log(`app is listening at Port: 5000`)
})
module.exports = app;