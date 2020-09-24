'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('clinics', [
      {
        name: 'Alergologia',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Angiologia',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Buco Maxilo',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cardiologia Clínica',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cardiologia Infantil',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cirurgia Cabeça e Pescoço',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cirurgia Cardíaca',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cirurgia de Torax',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cirurgia Geral',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cirurgia Pediátrica',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cirurgia Plástica',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cirurgia Torácica',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cirurgia Vasculas',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Clínica Médica',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('clinics', {});
  },
};
