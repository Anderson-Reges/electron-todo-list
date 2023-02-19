'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tasks', [{
      task_name: 'Limpar a casa',
      short_description: 'Limparei ouvindo musica'
    },
    {
      task_name: 'Fazer as compras do mês',
      short_description: 'No mercadinho Bem-Bom'
    }
    ], { timestamps: false });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
