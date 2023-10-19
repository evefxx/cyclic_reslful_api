const config = require("../config/dbconfig")
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.db, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    dialectOptions: {
        ssl: {
            required: true,
            rejectUnauthorized: false
        }
    },
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.refreshToken = require("./refreshToken.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user,{
    through:"user_roles"
});

// one to many
db.user.belongsToMany(db.role, {
    through: "user_roles"
});


//one to noe ความสัมพันธ์
db.refreshToken.belongsTo(db.user,{
    foreignkey:"userId",
    targetKey:"id",
});
db.user.hasOne(db.refreshToken,{
    foreignkey:"userId",
    targetKey:"id",
})



db.ROLES = ["user", "admin", "moderator"]

module.exports = db;
