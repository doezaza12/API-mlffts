"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_access_1 = require("./data-access");
class userInfoDAL {
    insertUserInfo(data) {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await data_access_1.DAL.mysqlConnector.user_info.create(data);
                return resolve(result.id);
            }
            catch (err) {
                console.error(err);
                return reject(err);
            }
        });
    }
}
exports.userInfoDAL = userInfoDAL;
//# sourceMappingURL=user_info.js.map