'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up (queryInterface, Sequelize) {
   return await queryInterface.createTable('users', {
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false,
     },
     name: {
       type: Sequelize.STRING,
       allowNull: false,
     },
     telephone_number: {
       type: Sequelize.STRING(14),
       allowNull: false,
       unique: true,
     },
     email: {
       type: Sequelize.STRING,
       allowNull: false,
       unique: true,
     },
     cpf: {
       type: Sequelize.STRING(11),
       allowNull: false,
       unique: true,
     },
     birth_date: {
       type: Sequelize.DATEONLY,
       allowNull: false
     },
     password: {
       type: Sequelize.STRING,
       allowNull: false,
     },
     created_at: {
       type: Sequelize.DATE,
       allowNull: false,
     },
     updated_at: {
       type: Sequelize.DATE,
       allowNull: false,
     },
   });
 },
 async down (queryInterface, Sequelize) {
   return await queryInterface.dropTable('users');
 }
};
