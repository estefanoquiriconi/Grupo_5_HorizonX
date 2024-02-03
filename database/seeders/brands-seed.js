module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "brands",
      [
        { name: "Samsung" },
        { name: "Motorola" },
        { name: "Apple" },
        { name: "Xiaomi" },
        { name: "Huawei" },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("brands", null, {});
  },
};
