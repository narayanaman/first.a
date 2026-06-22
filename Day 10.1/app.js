const express=require("express");

const app=express();

//app.get(URL,callbackfunction)

app.get("/",(req,res)=>{
    res.send("Home Page of Express");
});
// get,post ,put ,push,delete,

app.listen(3000,()=>{
    console.log("Server Started");
});