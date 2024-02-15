module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("shopping_carts", [
      {
        user_id: 1,
        total_price: 186999.98,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("shopping_carts", null, {});
  },
};
