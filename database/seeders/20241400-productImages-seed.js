module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "product_images",
      [
        { 
          id: 1, 
          product_id: 1, 
          image_filename: "1701897974058_img.png",
          // image_filename: "", 
          // image_filename: "", 
          // image_filename: "" 
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
          image_filename: "1702546563559_img.png",
        },
        { 
          id: 5,
          product_id: 5,
          image_filename: "honor90_img.png",
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
          image_filename: "12315494856_img.png",
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
          image_filename: "13215465489512_img.png",
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
          image_filename: "165947800645_img.png",
        },
        { 
          id: 20,
          product_id: 20,
          image_filename: "12341536358831_img.png",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("product_images", null, {});
  },
};
