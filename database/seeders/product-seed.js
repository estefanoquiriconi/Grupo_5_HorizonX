module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Redmi Note 8",
          description:
            "Pantalla: 6.3', 1080 x 2340 pixels · Procesador: Snapdragon 665 2GHz · RAM: 4GB/6GB · Almacenamiento: 64GB/128GB",
          price: 99999.99,
          stock_quantity: 10,
          brand_id: 4,
          category_id: 1,
          color_id: 1,
        },
        {
          name: "Buds 250",
          description:
            "True wireless headphones con estuche de carga inalámbrica · Bluetooth® 5.0 technology · Resistente al agua · Botón tactil inteligente",
          price: 86999.99,
          stock_quantity: 10,
          brand_id: 2,
          category_id: 2,
          color_id: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
