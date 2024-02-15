module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("colors", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      cod_hex: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("colors");
  },
};
