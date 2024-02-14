const db = require("../database/models");

const cartController = {
  cart: async (req, res) => {
    const userId = req.session.userLogged.id;
    try {
      const cart = await db.Cart.findOne({
        where: {
          user_id: userId,
        },
        include: [
          {
            model: db.CartItem,
            as: "items",
            include: [
              {
                model: db.Product,
                as: "product",
                include: ["color", "brand", "category", "images"],
              },
            ],
          },
        ],
      });
      res.json(cart);
    } catch (error) {
      console.error(error);
    }
  },

  add: async (req, res) => {
    const userId = req.session.userLogged.id
    try {
      const cart = await db.Cart.findOne({
        where: {
          user_id: userId,
        },
      });

      const itemData = {
        cart_id: cart.id,
        product_id: req.params.productId,
        quantity: 1,
      };

      const item = await db.CartItem.create(itemData);

      res.redirect("/cart/" + item.cart_id);
    } catch (error) {
      console.error(error);
    }
  },

  delete: async (req, res) => {
    const { itemId } = req.params;
    const item = await db.CartItem.findByPk(itemId);
    try {
      await db.CartItem.destroy({
        where: {
          id: itemId,
        },
      });
      res.redirect("/cart/" + item.cart_id);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = cartController;
