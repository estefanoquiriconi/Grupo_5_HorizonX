module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        { id: 1, name: "celulares" },
        { id: 2, name: "accesorios" },
        { id: 3, name: "tablets" },
        { id: 4, name: "computadoras" },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
