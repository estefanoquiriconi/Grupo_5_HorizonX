module.exports = (sequelize, dataTypes) => {
      const cols = {
            id : { type: dataTypes.INTEGER, primaryKey:true,autoIncrement:true},
            first_name: {type: dataTypes.STRING, allowNull: false},
            last_name:{type: dataTypes.STRING, allowNull: false},
            email:{type: dataTypes.STRING,allowNull: false},
            avatar:{type: dataTypes.STRING},
            password:{type: dataTypes.STRING,allowNull: false},
            role_id:{type: dataTypes.INTEGER},
      }
      const config = {
            table: 'users',
            timestamps: false
      }
      const User = sequelize.define('User', cols, config)

      User.associate = function (models) {
            User.belongsTo(models.Role, { 
                as: "role",
                foreignKey: "role_id"
            })
        }

      return User
}