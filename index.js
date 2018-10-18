import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import fs from "fs";



const app = express();
const Port = process.env.PORT || 5000;
app.use(cors());

 let user = {
     name: "chuks",
     password: "secret"
 }
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json({limit: '50mb'}))

app.get("/user", (req, res) =>{
    res.status(200).send(user)
})
app.listen(Port, ()=>{
    console.log(`app is listening at Port: 5000`)
})