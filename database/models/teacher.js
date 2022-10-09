const { Model } = require("sequelize");
// const sequelize = require('sequelize')


module.exports=(sequelize , DataTypes) => {
    class Teacher extends Model{
        static associate(models){
            this.hasMany(models.Course)
        }
    }

    Teacher.init(
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
            modelName: "Teacher",
        }
    )
    return Teacher;
}