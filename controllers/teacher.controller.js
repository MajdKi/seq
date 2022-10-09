const model = require("../database/models")
const ResponeModel = require("../models/respone_model")

class TeacherController {
    static get = async(req,res,next)=>{
        var _all = await models.Teacher.findAll({
            
        });
        next(
            new ResponeModel({
                statusCode: 200,
                data:_all,
                message:"done"
            })
            
            )
    }
}

module.exports = TeacherController;