const {Sequelize} = require("sequelize");
const dbConfig = require("../config/dbconfig");

//Create sequelize instance
const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host:dbConfig.host,
    dialect:"mysql",
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
   },
});

//Test the database 
async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

//





testConnection();
module.exports = sequelize;
