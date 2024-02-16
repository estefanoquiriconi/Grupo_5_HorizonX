module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        first_name: "Estéfano",
        last_name: "Quiriconi",
        email: "estefanoquiriconi@gmail.com",
        avatar: "default-avatar-image.png",
        password: "123",
        role_id: 2, //administrador
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
