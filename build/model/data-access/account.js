"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_access_1 = require("./data-access");
class accountDAL {
    insertAccount(data) {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await data_access_1.DAL.mysqlConnector.account.create(data);
                resolve(result);
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        });
    }
    updateTokenById(id, token) {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await data_access_1.DAL.mysqlConnector.account.update({
                    token: token
                }, { where: { id: id } });
                if (result[0] == 0)
                    resolve(false);
                resolve(true);
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        });
    }
    updateAccessTokenById(id, access_token) {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await data_access_1.DAL.mysqlConnector.account.update({
                    access_token: access_token
                }, { where: { id: id } });
                if (result)
                    resolve(true);
                else
                    resolve(false);
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        });
    }
    validateToken(id, token) {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await data_access_1.DAL.mysqlConnector.account.findOne({
                    where: {
                        id: id,
                        token: token
                    }
                });
                if (result)
                    resolve(true);
                resolve(false);
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        });
    }
    upsertAccountByLine(line_id) {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await data_access_1.DAL.mysqlConnector.account.findOrCreate({
                    where: { username: line_id }, defaults: { id: null, _isVerify: 1 }
                });
                // return ture = insert
                resolve(result);
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        });
    }
    getAccountById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await data_access_1.DAL.mysqlConnector.account.findOne({ where: { id: id } });
                if (result)
                    resolve(result);
                resolve(null);
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        });
    }
    getAccountByUsername(username) {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await data_access_1.DAL.mysqlConnector.account.findOne({
                    where: {
                        username: username
                    }
                });
                if (result)
                    resolve(result);
                resolve(null);
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        });
    }
    getAccountList(limit = 10, offset = 0) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await data_access_1.DAL.mysqlConnector.account.findAndCountAll({ limit: limit, offset: offset });
                resolve({ data: data.rows, count: data.count });
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        });
    }
    verifyAccount(token) {
        return new Promise(async (resolve, reject) => {
            try {
                await data_access_1.DAL.mysqlConnector.account.update({ _isVerify: 1, token: null }, { where: { token: token } });
                resolve(true);
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        });
    }
    editAccountTypeAndActive(data) {
        return new Promise(async (resolve, reject) => {
            try {
                let account_data = {};
                data.type ? account_data.type = data.type : '';
                data._isActive ? account_data._isActive = data._isActive : '';
                await data_access_1.DAL.mysqlConnector.account.update(account_data, { where: { id: data.id } });
                resolve(true);
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        });
    }
}
exports.accountDAL = accountDAL;
//# sourceMappingURL=account.js.map