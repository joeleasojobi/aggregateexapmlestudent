var express=require('express')
var bodyParser = require('body-parser')
var mongoose=require('mongoose')
var {studentRouter}=require('./controller/studentController')
var { studentModel } = require('./models/studentModel')
var { markModel }=require('./models/markModel')


mongoose.connect("mongodb+srv://joeleasojobi:C2S8f6KqF5HRZ3Fw@cluster0.oz8vl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{useNewUrlParser:true}
)
.then(()=>console.log('MongoDb Connected'))
.catch(err=>console.log(err))

var app=express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/student',studentRouter)

app.get('/',(req,res)=>{
    res.send("Welcome to my Website")
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Started at http://localhost:3000");
})

