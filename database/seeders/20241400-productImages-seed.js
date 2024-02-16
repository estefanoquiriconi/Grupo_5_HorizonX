module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "product_images",
      [
        { id: 1, product_id: 1, image_filename: "1701897974058_img.png" },
        { id: 2, product_id: 2, image_filename: "1702522200114_img.png" },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("product_images", null, {});
  },
};
