"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status-codes");
const request = require("request");
const jwt = require("jsonwebtoken");
const config_1 = require("../util/config");
const data_access_1 = require("../model/data-access/data-access");
async function getUserInfo(req, res, next) {
    try {
        let user_data = await data_access_1.DAL.userInfoDAL.getUserInfoByAccountId(req['payload'].id);
        let account_data = await data_access_1.DAL.accountDAL.getAccountById(req['payload'].id);
        let data = {};
        // let e_code = (await DAL.easypassDAL.getEasyPassById(user_data.e_code_id)).e_code;
        // user_data.e_code_id = e_code;
        let e_code_list = await data_access_1.DAL.eCodeMapDAL.getEcodeByAccountId(req['payload'].id);
        let e_code = [];
        for (let i = 0; i < e_code_list.length; i++) {
            let e_code_info = await data_access_1.DAL.easypassDAL.getEasyPassById(e_code_list[i].e_code_id);
            e_code.push({ e_code_id: e_code_info.id, e_code: e_code_info.e_code });
        }
        data = JSON.parse(JSON.stringify(user_data));
        data['e_code_id'] = e_code;
        data['type'] = account_data.type;
        data['access_token'] = account_data.access_token;
        return res.status(HttpStatus.OK).send(data);
    }
    catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).send();
    }
}
exports.getUserInfo = getUserInfo;
async function editUserInfo(req, res, next) {
    try {
        let user_data = {};
        let account_id = req['payload'].id;
        user_data.citizen_id = req.body.citizen_id;
        // user_data.e_code_id = (await DAL.easypassDAL.getEasyPassBye_code(req.body.e_code)).id;
        user_data.email = req.body.email;
        user_data.firstname = req.body.firstname;
        user_data.lastname = req.body.lastname;
        user_data.line_id = req.body.line_id;
        await data_access_1.DAL.userInfoDAL.updateUserInfo(user_data, account_id);
        res.status(HttpStatus.OK).send();
    }
    catch (err) {
        console.error(err);
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
    }
}
exports.editUserInfo = editUserInfo;
async function callbackLine(req, res, next) {
    try {
        let result = await new Promise(async (resolve, reject) => {
            try {
                request.post('https://api.line.me/oauth2/v2.1/token', {
                    form: {
                        grant_type: 'authorization_code',
                        code: req.query.code,
                        client_id: process.env.line_client_id || config_1.Configuration.line.client_id,
                        client_secret: process.env.line_client_secret || config_1.Configuration.line.client_secret,
                        redirect_uri: process.env.NODE_ENV == 'production' ? 'https://mlffts-api.herokuapp.com/profile/cb-line' : 'http://localhost:8080/profile/cb-line'
                    }
                }, async (err, res, body) => {
                    if (err)
                        console.error(err);
                    let jsonBody = JSON.parse(body);
                    console.log(jsonBody);
                    let payload = jwt.decode(jsonBody.id_token);
                    console.log(payload);
                    resolve(payload['sub']);
                });
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        });
        return res.status(HttpStatus.OK).send({ line_id: result });
    }
    catch (err) {
        console.error(err);
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
    }
}
exports.callbackLine = callbackLine;
//# sourceMappingURL=user_info.js.map