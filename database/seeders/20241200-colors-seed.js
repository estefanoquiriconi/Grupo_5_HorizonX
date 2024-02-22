module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("colors", [
      { id: 1, name: "Negro", cod_hex: "#000000" },
      { id: 2, name: "Blanco", cod_hex: "#FFFFFF" },
      { id: 3, name: "Rojo", cod_hex: "#FF0000" },
      { id: 4, name: "Verde", cod_hex: "#00FF00" },
      { id: 5, name: "Azul", cod_hex: "#0000FF" },
      { id: 6, name: "Amarillo", cod_hex: "#FFFF00" },
      { id: 7, name: "Platinado", cod_hex: "#e5e4e2" },
      { id: 8, name: "Rosado", cod_hex: "#fae1e5" },
      { id: 9, name: "Grafito", cod_hex: "#242323" },
      { id: 10, name: "Durazno", cod_hex: "#FBCAA9" },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("colors", null, {});
  },
};
