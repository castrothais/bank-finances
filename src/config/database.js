require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.HOSTNAME,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'myBank-finances',
  define: {
    timestamps: true,
    underscored: true,
  },
};
