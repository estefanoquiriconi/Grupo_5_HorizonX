module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "product_images",
      [
        { 
          id: 1, 
          product_id: 1, 
          image_filename: "razr-165520-800-auto.png",
        },
        { 
          id: 2,
          product_id: 2,
          image_filename: "1702522200114_img.png",
        },
        { 
          id: 3,
          product_id: 3,
          image_filename: "ip14_img.png",
        },
        { 
          id: 4,
          product_id: 4,
          image_filename: "17025465635590_img.png",
        },
        { 
          id: 5,
          product_id: 5,
          image_filename: "razr-164579-700-auto.png",
        },
        { 
          id: 6,
          product_id: 6,
          image_filename: "164681800_img.png",
        },
        { 
          id: 7,
          product_id: 7,
          image_filename: "1695823871SvMBE833_img.png",
        },
        { 
          id: 8,
          product_id: 8,
          image_filename: "6841b7ab8dd7a3a088cb77_img.webp",
        },
        { 
          id: 9, 
          product_id: 9, 
          image_filename: "515545448115_img.png",
        },
        { 
          id: 10, 
          product_id: 10, 
          image_filename: "1523465486554_img.png",
        },
        { 
          id: 11, 
          product_id: 11,
          image_filename: "12315494856_img.jpg",
        },
        { 
          id: 12, 
          product_id: 12, 
          image_filename: "15488965132158_img.png",
        },
        { 
          id: 13, 
          product_id: 13, 
          image_filename: "ipadpro_img.png",
        },
        { 
          id: 14, 
          product_id: 14, 
          image_filename: "matepad4_img.png",
        },
        { 
          id: 15, 
          product_id: 15, 
          image_filename: "189199-800_img.png",
        },
        { 
          id: 16, 
          product_id: 16,
          image_filename: "539476295_img.png",
        },
        { 
          id: 17, 
          product_id: 17, 
          image_filename: "mbp16-gray_img.png",
        },
        { 
          id: 18, 
          product_id: 18, 
          image_filename: "mb68794521315_img.png",
        },
        { 
          id: 19, 
          product_id: 19, 
          image_filename: "165947800640_img.webp",
        },
        { 
          id: 20,
          product_id: 20,
          image_filename: "12341536358832_img.webp",
        },
        { 
          id: 21, 
          product_id: 1, 
          image_filename: "razr-165521-800-auto.png",
        },
        { 
          id: 22, 
          product_id: 1, 
          image_filename: "razr-165522-800-auto.png",
        },
        { 
          id: 23, 
          product_id: 1, 
          image_filename: "razr-165523-800-auto.png",
        },
        { 
          id: 24, 
          product_id: 1, 
          image_filename: "razr-165524-800-auto.png",
        },
        { 
          id: 26, 
          product_id: 5, 
          image_filename: "razr-164580-700-auto.png",
        },
        { 
          id: 27, 
          product_id: 5, 
          image_filename: "razr-164581-700-auto.png",
        },
        { 
          id: 28, 
          product_id: 5, 
          image_filename: "razr-164582-700-auto.png",
        },
        { 
          id: 29, 
          product_id: 5, 
          image_filename: "razr-164583-700-auto.png",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("product_images", null, {});
  },
};
