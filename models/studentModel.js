var mongoose = require('mongoose');

var studentSchema=new mongoose.Schema(
    {
        name: {
            type:String,
            required:true
        },
        rollno: {
            type:Number,
            required:true
        },
        admissionno: {
            type:Number,
            required:true
        },
        college: {
            type:String,
            required:true
        }
    }
)

var studentModel=mongoose.model('studentlists',studentSchema);

module.exports={studentModel}