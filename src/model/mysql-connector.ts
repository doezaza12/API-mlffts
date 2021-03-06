import * as Sequelize from 'sequelize';
import * as dbTables from './db.tables';
import * as dbModel from './db';

export class MySQLConnector {
    table: dbTables.ITables;
    account: dbModel.accountModel;
    user_info: dbModel.user_infoModel;
    lp_info: dbModel.lp_infoModel;
    checkpoint: dbModel.checkpointModel;
    charges: dbModel.chargesModel;
    transaction: dbModel.transactionModel;
    easypass: dbModel.easypassModel;
    e_code_map: dbModel.e_code_mapModel;

    constructor(sequelize: Sequelize.Sequelize) {
        this.table = dbTables.getModels(sequelize);
        this.account = this.table.account;
        this.user_info = this.table.user_info;
        this.lp_info = this.table.lp_info;
        this.checkpoint = this.table.checkpoint;
        this.charges = this.table.charges;
        this.transaction = this.table.transaction;
        this.easypass = this.table.easypass;
        this.e_code_map = this.table.e_code_map;
    }
}
