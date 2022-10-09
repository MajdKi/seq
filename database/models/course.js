const { Model } = require("sequelize")


module.exports = (sequelize,DataTypes)=>{
    class Course extends Model{
        static associate(models){
            this.belongsTo(models.Teacher)
        }
    }

    Course.init(
        {
 
                id:{
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    // allowNull: false,
                    primaryKey: true,
                },

        
        },
        {
            sequelize,
            modelName: "Course",
        }
    )

    return Course;
}