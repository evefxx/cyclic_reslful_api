const express = require("express");
const cors = require("cors");
const sql = require("./model/db.js")
const PORT = 3000;
const restaurantRouter = require("./Router/restaurant.router");


//
const app = express();


//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.send("<h1>This is a  restaurant API</h1>");
})
 
app.use("/", restaurantRouter);

app.listen(PORT, ()=>{
    console.log("Server is running on http://localhost:"+ PORT);
})
