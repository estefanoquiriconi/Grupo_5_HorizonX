module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("cart_items", [
      {
        cart_id: 1,
        product_id: 1,
        quantity: 1,
      },
      {
        cart_id: 1,
        product_id: 2,
        quantity: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cart_items", null, {});
  },
};
