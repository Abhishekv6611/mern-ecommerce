const express=require('express')

const Admin=express.Router()

Admin.get('/AdminHome',(req,res)=>{
    res.send("This is Admin page")
})

module.exports=Admin;
