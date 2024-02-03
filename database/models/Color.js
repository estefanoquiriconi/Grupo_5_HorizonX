module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define(
    "Color",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      cod_hex: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      tableName: "colors",
      timestamps: false,
    }
  );

  return Color;
};
