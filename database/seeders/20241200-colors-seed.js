module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("colors", [
      { id: 1, name: "Negro", cod_hex: "#000000" },
      { id: 2, name: "Blanco", cod_hex: "#FFFFFF" },
      { id: 3, name: "Rojo", cod_hex: "#FF0000" },
      { id: 4, name: "Verde", cod_hex: "#00FF00" },
      { id: 5, name: "Azul", cod_hex: "#0000FF" },
      { id: 6, name: "Amarillo", cod_hex: "#FFFF00" },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("colors", null, {});
  },
};
