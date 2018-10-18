const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");


const user = require("./server/src/controllers/Users/Users")
const app = express();
const Port = process.env.PORT || 5000;
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
//app.use(bodyParser.json({limit: '50mb'}))

app.get("/user", (req, res) =>{
    res.status(200).send(user)
    console.log(user)
})
app.listen(Port, ()=>{
    console.log(`app is listening at Port: 5000`)
})
module.exports = app;