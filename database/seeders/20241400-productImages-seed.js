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
          image_filename: "mg54-165263-800-auto.png",
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
        { 
          id: 30,
          product_id: 6,
          image_filename: "mg54-165265-800-auto.png",
        },
        { 
          id: 31,
          product_id: 6,
          image_filename: "mg54-165266-800-auto.png",
        },
        { 
          id: 32,
          product_id: 6,
          image_filename: "mg54-165272-800-auto.png",
        },
        { 
          id: 33,
          product_id: 6,
          image_filename: "mg54-165273-800-auto.png",
        },
        { 
          id: 34, 
          product_id: 21, 
          image_filename: "Samsung_Galaxy_Z_Fold5_512_GB_Phantom_Black_1.webp",
        },
        { 
          id: 35, 
          product_id: 21, 
          image_filename: "Samsung_Galaxy_Z_Fold5_512_GB_Phantom_Black_2.webp",
        },
        { 
          id: 36, 
          product_id: 21, 
          image_filename: "Samsung_Galaxy_Z_Fold5_512_GB_Phantom_Black_3.webp",
        },
        { 
          id: 37, 
          product_id: 22, 
          image_filename: "Moto_E_22_1.webp",
        },
        { 
          id: 38, 
          product_id:22 , 
          image_filename: "Moto_E_22_2.webp",
        },
        { 
          id: 39, 
          product_id: 22, 
          image_filename: "Moto_E_22_3.webp",
        },
        { 
          id: 40, 
          product_id: 23, 
          image_filename: "Moto_G32_Gris_1.webp",
        },
        { 
          id: 41, 
          product_id: 23, 
          image_filename: "Moto_G32_Gris_2.webp",
        },
        { 
          id: 42, 
          product_id: 23, 
          image_filename: "Motorola_Moto_G32_3.webp",
        },
        { 
          id: 43, 
          product_id: 24, 
          image_filename: "Moto_G84_Ballad_Blue_1.jpg",
        },
        { 
          id: 44, 
          product_id: 24, 
          image_filename: "Moto_G84_Ballad_Blue_2.jpg",
        },
        { 
          id: 45, 
          product_id: 24, 
          image_filename: "Moto_G84_Ballad_Blue_3.jpg",
        },
        { 
          id: 46, 
          product_id: 25, 
          image_filename: "Redmi_Note_11_1.png",
        },
        { 
          id: 47, 
          product_id: 25, 
          image_filename: "Redmi_Note_11_2.jpg",
        },
        { 
          id: 48, 
          product_id: 25, 
          image_filename: "Redmi_Note_11_3.jpg",
        },
        { 
          id: 49, 
          product_id: 26, 
          image_filename: "Samsung_Galaxy_A24_1.png",
        },
        { 
          id: 50, 
          product_id: 26, 
          image_filename: "Samsung_Galaxy_A24_2.webp",
        },
        { 
          id: 51, 
          product_id: 26, 
          image_filename: "Samsung_Galaxy_A24_3.png",
        },
        { 
          id: 52, 
          product_id: 27, 
          image_filename: "Adaptador_Samsung_Carga_Rapida_1.jpg",
        },
        { 
          id: 53, 
          product_id: 27, 
          image_filename: "Adaptador_Samsung_Carga_Rapida_2.jpg",
        },
        { 
          id: 54, 
          product_id: 27, 
          image_filename: "Adaptador_Samsung_Carga_Rapida_3.jpg",
        },
        { 
          id: 55, 
          product_id: 28, 
          image_filename: "Carg_Portatil_1.webp",
        },
        { 
          id: 56, 
          product_id: 28, 
          image_filename: "Carg_Portatil_2.webp",
        },
        { 
          id: 57, 
          product_id: 29, 
          image_filename: "Cable_USB_Apple.webp",
        },
        { 
          id: 58, 
          product_id: 30, 
          image_filename: "Tripode_1.jpg",
        },
        { 
          id: 59, 
          product_id: 30, 
          image_filename: "Tripode_2.jpg",
        },
        { 
          id: 60, 
          product_id: 31, 
          image_filename: "Midnight-1.jpg",
        },
        { 
          id: 61, 
          product_id: 31, 
          image_filename: "Midnight-2.jpg",
        },
        { 
          id: 62, 
          product_id: 31, 
          image_filename: "Midnight-3.jpg",
        },
        { 
          id: 63, 
          product_id: 32, 
          image_filename: "Samsung_Galaxy_A34_1.webp",
        },
        { 
          id: 64, 
          product_id: 32, 
          image_filename: "Samsung_Galaxy_A34_2.webp",
        },
        { 
          id: 65, 
          product_id: 33, 
          image_filename: "Motorola_Edge_40_Eclipse_1.webp",
        },
        { 
          id: 66, 
          product_id: 33, 
          image_filename: "Motorola_Edge_40_Eclipse_2.webp",
        },
        { 
          id: 67, 
          product_id: 34, 
          image_filename: "Samsung_Galaxy_S21_1.webp",
        },
        { 
          id: 68, 
          product_id: 34, 
          image_filename: "Samsung_Galaxy_S21_2.webp",
        },
        { 
          id: 69, 
          product_id: 35, 
          image_filename: "Xiaomi_Redmi_Note_10S_1.jpg",
        },
        { 
          id: 71, 
          product_id: 35, 
          image_filename: "Xiaomi_Redmi_Note_10S_3.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("product_images", null, {});
  },
};
