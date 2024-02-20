module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        { id: 1, name: "Celular" },
        { id: 2, name: "Accesorio" },
        { id: 3, name: "Tablets" },
        { id: 4, name: "Computadoras" },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
