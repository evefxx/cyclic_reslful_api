//18
const config = require("../config/auth.config");
const { v4: uuid4 } = require("uuid")

//ความต่าง sequelize ตัวเล็กคือใช้ตั้งชื่อตัวแปรทั่วไป new=instance ตัวใหญ่คือ class module
module.exports = (sequelize, Sequelize) => {
    const RefreshToken = sequelize.define("refreshToken", {
        token: {
            type: Sequelize.STRING,
        },
        expiryDate: {
            type: Sequelize.DATE
        }
    });
    RefreshToken.createToken = async function (user) {
        let expiredAt = new Date();
        expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtRefreshExpiration);
        let _token = uuid4();
        let refreshToken = await this.create({
            token: _token,
            userId: user.id,
            expiryDate: expiredAt,
        });
        return refreshToken.token
    }
    RefreshToken.veryExpiration = (token) => {
        //true: expired, false: not expired
        return token.expiryDate.getTime() < new Date().getTime();
    }
    return RefreshToken;
}