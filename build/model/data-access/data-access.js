"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const mysql_connector_1 = require("../mysql-connector");
const account_1 = require("./account");
const user_info_1 = require("./user_info");
const lp_info_1 = require("./lp_info");
class DAL {
    constructor(config) {
        try {
            DAL.sequelize = new Sequelize({
                host: config.host,
                username: config.username,
                password: config.password,
                database: config.database,
                port: config.port,
                dialect: 'mysql'
            });
            DAL.mysqlConnector = new mysql_connector_1.MySQLConnector(DAL.sequelize);
            DAL.accountDAL = new account_1.accountDAL();
            DAL.userInfoDAL = new user_info_1.userInfoDAL();
            DAL.lpInfoDAL = new lp_info_1.lpInfoDAL();
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.DAL = DAL;
//# sourceMappingURL=data-access.js.map