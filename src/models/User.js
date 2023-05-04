const { Model, DataTypes } = require('sequelize');
const moment = require('moment');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [10, 50],
        },
      },
      telephoneNumber: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true,
        field: 'telephone_number', // informa ao Sequelize que a coluna no banco de dados é 'telephone_number'
        validate: {
          is: /^(\(\d{2}\)\d{5}-\d{4}|\d{2}\d{5}-\d{4})$/,

        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true,
        field: 'cpf', // informa ao Sequelize que a coluna no banco de dados é 'cpf'
        validate: {
          is: /^\d{11}$/,
        },
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'birth_date', // informa ao Sequelize que a coluna no banco de dados é 'birth_date'
        validate: {
          isBefore: moment().subtract(18, 'years').format('YYYY-MM-DD'),
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [7, 20],
        },
      },
    }, {
      sequelize,
      underscored: true,
      tableName: 'users', // informa ao Sequelize o nome real da tabela no banco de dados
    });
  }
}

module.exports = User;
