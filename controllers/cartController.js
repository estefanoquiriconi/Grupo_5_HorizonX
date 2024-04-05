const db = require("../database/models");

async function calculateTotalPrice(cartId) {
  const items = await db.CartItem.findAll({
    where: { cart_id: cartId },
    include: [{ model: db.Product, as: "product" }],
  });

  const totalPrice = items.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );

  await db.Cart.update({ total_price: totalPrice }, { where: { id: cartId } });

  return totalPrice;
}

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
      cart.total_price = await calculateTotalPrice(cart.id)
      cart.items.length === 0
        ? res.render("cart/empty")
        : res.render("cart/list", { cart });
    } catch (error) {
      console.error(error);
    }
  },

  add: async (req, res) => {
    const userId = req.session.userLogged.id;
    try {
      //Buscar el carrito del usuario
      const cart = await db.Cart.findOne({
        where: {
          user_id: userId,
        },
      });

      // Buscar el ítem del producto en el carrito
      const item = await db.CartItem.findOne({
        where: {
          cart_id: cart.id,
          product_id: req.params.productId,
        },
      });

      // Si el producto ya está en el carrito, aumentar la cantidad
      if (item) {
        await db.CartItem.update(
          { quantity: item.quantity + 1 },
          { where: { id: item.id } }
        );
      } else {
        // Si el producto no está en el carrito, crear un nuevo ítem
        const itemData = {
          cart_id: cart.id,
          product_id: req.params.productId,
          quantity: 1,
        };
        await db.CartItem.create(itemData);
      }

      res.redirect("/cart");
    } catch (error) {
      console.error(error);
    }
  },

  confirmBuy: async (req,res) => {
    const userId = req.session.userLogged.id;
    const cart = await db.Cart.findOne({where:{user_id:userId}})

    try {
      await db.CartItem.destroy({where: {cart_id:cart.id}})
    } catch(e) {
      console.error(e);
    }
    res.redirect("/cart")
  },

  delete: async (req, res) => {
    const { itemId } = req.params;
    const userId = req.session.userLogged.id;
    const cart = await db.Cart.findOne({
      where: {
        user_id: userId,
      },
    });
    try {
      await db.CartItem.destroy({
        where: {
          id: itemId,
        },
      });

      res.redirect("/cart");
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = cartController;
