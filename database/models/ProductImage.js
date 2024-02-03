module.exports = (sequelize, DataTypes) => {
  const ProductImage = sequelize.define(
    "ProductImage",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image_filename: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: "product_images",
      timestamps: false,
    }
  );
  return ProductImage;
};
