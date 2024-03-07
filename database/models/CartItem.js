module.exports = (sequelize, DataTypes) => {
    const CartItem = sequelize.define(
      "CartItem",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        cart_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
      },
      {
        tableName: "cart_items",
        timestamps: false,
      }
    );

    CartItem.associate = function (models) {
        CartItem.belongsTo(models.Cart, { as: "cart", foreignKey: "cart_id" });      
        CartItem.belongsTo(models.Product, { as: "product", foreignKey: "product_id"});
    };


    return CartItem;
  };
  