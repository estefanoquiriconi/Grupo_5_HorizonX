module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      color_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "products",
      timestamps: false,
    }
  );

  Product.associate = function (models) {
    Product.hasMany(models.ProductImage, {
      as: "images",
      foreignKey: "product_id",
    });
    Product.belongsTo(models.Brand, { as: "brand", foreignKey: "brand_id" });
    Product.belongsTo(models.Category, {
      as: "category",
      foreignKey: "category_id",
    });
    Product.belongsTo(models.Brand, { as: "color", foreignKey: "color_id" });
  };

  return Product;
};
