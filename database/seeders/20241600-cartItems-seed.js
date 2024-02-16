module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("cart_items", [
      {
        id : 1,
        cart_id: 1,
        product_id: 1,
        quantity: 1,
      },
      {
        id : 2,
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
