// module.exports = {
//     // host:"aws.connect.psdb.cloud",
//     // user:"1k4pfbvx1per8jx32k3a",
//     // password:"pscale_pw_zHKSRWTWyMvanzxAd13lmdsXMKDc2XlSOYHNK7a1zAv",
//     // db:"se_database"
// }
require('dotenv').config()

module.exports = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    db: process.env.DB,
};
//H