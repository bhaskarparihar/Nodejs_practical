const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.render('Home')
})
app.get("/workouts", (req, res)=>{
    
})
app.get("/workout/new", (req, res)=>{

})
app.post("/workout", (req.res)=>{

})
app.get("/workouts/:id",(req, res)=>{

})
app.get("/workouts/:id/edit", (res, req)=>{

})
app.put("/workouts/:id",(req, res)=>{
     
})
app.delete("/workouts/:", (req,res)=>{

})



