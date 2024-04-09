module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        first_name: "María",
        last_name: "Fernández",
        email: "maria.fernandez@gmail.com",
        avatar: "1712112969193.jpg",
        password:
          "$2a$10$1t.uCqcLX0xBPWsioSP6b.hwOz.2RNjaS9.fRTD0sNZ7OeNq0gTba", // 123
        role_id: 2, //cliente
      },
      {
        id: 2,
        first_name: "Javier",
        last_name: "Gonzáles",
        email: "javier.gonzales@gmail.com",
        avatar: "1712114265240.jpg",
        password:
          "$2a$10$1t.uCqcLX0xBPWsioSP6b.hwOz.2RNjaS9.fRTD0sNZ7OeNq0gTba", // 123
        role_id: 1, //administrador
      },
      {
        id: 3,
        first_name: "Carlos",
        last_name: "López",
        email: "carlos.lopez@gmail.com",
        avatar: "1712113629067.jpg",
        password:
          "$2a$10$1t.uCqcLX0xBPWsioSP6b.hwOz.2RNjaS9.fRTD0sNZ7OeNq0gTba", // 123
        role_id: 1, //cliente
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
