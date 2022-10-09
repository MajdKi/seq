const express = require('express')
const router = express.Router();
const TeacherController = require("../../controllers/teacher.controller")


router.get("/" , TeacherController.get , (data,req ,res,next ) =>{
    res.status(data.statusCode).json(data);
})

module.exports=router