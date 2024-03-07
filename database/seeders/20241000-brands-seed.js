module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "brands",
      [
        { id : 1, name: "Samsung" },
        { id : 2, name: "Motorola" },
        { id : 3, name: "Apple" },
        { id : 4, name: "Xiaomi" },
        { id : 5, name: "Huawei" },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("brands", null, {});
  },
};
