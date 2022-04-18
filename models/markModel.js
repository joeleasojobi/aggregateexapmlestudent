var mongoose = require('mongoose');

var markSchema=new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'studentlists'
        },
        exam_name: {
            type:String,
            required:true
        },
        subject_name_1: {
            type:String,
            required:true
        },
        subject_mark_obtained_1: {
            type:Number,
            required:true
        },
        subject_total_mark_1: {
            type:Number,
            required:true
        },
        subject_name_2: {
            type:String,
            required:true
        },
        subject_mark_obtained_2: {
            type:Number,
            required:true
        },
        subject_total_mark_2: {
            type:Number,
            required:true
        },
        subject_name_3: {
            type:String,
            required:true
        },
        subject_mark_obtained_3: {
            type:Number,
            required:true
        },
        subject_total_mark_3: {
            type:Number,
            required:true
        },
        subject_name_4: {
            type:String,
            required:true
        },
        subject_mark_obtained_4: {
            type:Number,
            required:true
        },
        subject_total_mark_4: {
            type:Number,
            required:true
        },
        subject_name_5: {
            type:String,
            required:true
        },
        subject_mark_obtained_5: {
            type:Number,
            required:true
        },
        subject_total_mark_5: {
            type:Number,
            required:true
        },

    }
)

var markModel=mongoose.model('marklists',markSchema);

module.exports={markModel}