module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define(
      "Cart",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        total_price: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: false,
        }
      },
      {
        tableName: "shopping_carts",
        timestamps: false,
      }
    );

    Cart.associate = function (models) {
        Cart.belongsTo(models.User, { as: "user", foreignKey: "user_id" });      
    };

    return Cart;
  };
  