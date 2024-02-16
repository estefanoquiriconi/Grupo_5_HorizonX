module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "colors",
      [
        { name: "Negro", cod_hex: "#000000" },
        { name: "Blanco", cod_hex: "#FFFFFF" },
        { name: "Rojo", cod_hex: "#FF0000" },
        { name: "Verde", cod_hex: "#00FF00" },
        { name: "Azul", cod_hex: "#0000FF" },
        { name: "Amarillo", cod_hex: "#FFFF00" },
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("colors", null, {});
  },
};
