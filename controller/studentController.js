var express = require('express')
var bodyParser = require('body-parser')
var mongoose=require('mongoose')
var {studentModel} = require('../models/studentModel')
var { markModel }=require('../models/markModel')
var studentRouter=express.Router()

studentRouter.use(bodyParser.urlencoded({ extended: false }))
studentRouter.use(bodyParser.json())

studentRouter.get('/',(req,res)=>{
    return res.send("This is student page")
})

studentRouter.post('/addmarks',(req,res)=>{   
    var markObject=new markModel(req.body);
    markObject.save(
        (error)=>{
            if(error){
                res.send(error)
            } else {
                res.json({"status":"success"})

            }
        }
    )
    res.json( markObject )
})


studentRouter.get('/viewmarks', (req,res)=>{
    try{
        studentModel.aggregate(
            [
                {
                    $lookup:{
                        from:"marklists",
                        localField:"_id",
                        foreignField:"studentId",
                        as:"exams_marks"
                    }
                }
            ], (error,data)=>{
                return res.json(data)
            }
        )
       
    }catch(error){
        res.send(error)
    }
})

studentRouter.post('/addstudents',(req,res)=>{   
    var studentObject=new studentModel(req.body);
    studentObject.save(
        (error)=>{
            if(error){
                res.send(error)
            } else {
                res.json({"status":"success"})

            }
        }
    )
    res.json( studentObject )
})

studentRouter.get('/viewstudents',async (req,res)=>{
    try{
        var result=await studentModel.find()
        res.json(result)
    }catch(error){
        res.send(error)
    }
})
studentRouter.post('/searchstudents',async(req,res)=>{
    try{
        var result=await studentModel.find(req.body)
        res.json(result)
    }catch(error){
        res.json({"status":"error"})
    }
})
studentRouter.post('/editstudents',async(req,res)=>{
    try{
        var result=await studentModel.findOneAndUpdate({"_id":req.body._id},req.body)
        res.json(result)
    }catch(error){
        res.json({"status":"error"})
    }
})

studentRouter.post('/deletestudents',async(req,res)=>{
    try{
        var result=await studentModel.findByIdAndDelete({"_id":req.body._id})
        res.json(result)
    }catch(error){
        res.json({"status":"error"})
    }
})


module.exports={studentRouter}