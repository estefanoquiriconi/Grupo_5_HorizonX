module.exports = (sequelize, dataTypes) => {
      const cols = {
            id : { type: dataTypes.INTEGER, primaryKey:true,autoIncrement:true},
            name: {type: dataTypes.STRING, allowNull: false},
      }
      const config = {
            tableName: 'roles',
            timestamps: false
      }
      const Role = sequelize.define('Role', cols, config)


      return Role
}