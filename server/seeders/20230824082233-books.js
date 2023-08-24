"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("books", [
      {
        name: "The river between",
        author: "Ngugi wa Thiongo",
        year_published: 1958,
      },
      {
        name: "Dareesalam by Night",
        author: "Majorie Oludhe",
        year_published: 2005,
      },
      {
        name: "My life in crime",
        author: "John Kiriamiti",
        year_published: 1958,
      },
      { name: "Utengano", author: "Maimuna maimuna", year_published: "1958" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("books", null, {});
  },
};
