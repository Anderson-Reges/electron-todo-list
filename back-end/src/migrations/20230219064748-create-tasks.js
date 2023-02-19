'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      task_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      short_description: {
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => await queryInterface.dropTable('tasks')
};
