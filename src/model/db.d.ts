// tslint:disable
import * as Sequelize from 'sequelize';


// table: account
export interface accountAttribute {
	id:any;
	username?:any;
	password?:any;
	type?:any;
	_isVerify?:any;
	_isActive?:any;
	token?:any;
	access_token?:any;
}
export interface accountInstance extends Sequelize.Instance<accountAttribute>, accountAttribute { }
export interface accountModel extends Sequelize.Model<accountInstance, accountAttribute> { }

// table: checkpoint
export interface checkpointAttribute {
	id:any;
	lat?:any;
	lng?:any;
	area_name?:any;
	area_name_en?:any;
}
export interface checkpointInstance extends Sequelize.Instance<checkpointAttribute>, checkpointAttribute { }
export interface checkpointModel extends Sequelize.Model<checkpointInstance, checkpointAttribute> { }

// table: easypass
export interface easypassAttribute {
	id:any;
	e_code?:any;
	wallet?:any;
}
export interface easypassInstance extends Sequelize.Instance<easypassAttribute>, easypassAttribute { }
export interface easypassModel extends Sequelize.Model<easypassInstance, easypassAttribute> { }

// table: charges
export interface chargesAttribute {
	id:any;
	cpk_1?:any;
	cpk_2?:any;
	cost?:any;
}
export interface chargesInstance extends Sequelize.Instance<chargesAttribute>, chargesAttribute { }
export interface chargesModel extends Sequelize.Model<chargesInstance, chargesAttribute> { }

// table: lp_info
export interface lp_infoAttribute {
	id:any;
	e_code_id:any;
	license_number?:any;
	province?:any;
}
export interface lp_infoInstance extends Sequelize.Instance<lp_infoAttribute>, lp_infoAttribute { }
export interface lp_infoModel extends Sequelize.Model<lp_infoInstance, lp_infoAttribute> { }

// table: e_code_map
export interface e_code_mapAttribute {
	e_code_id:any;
	account_id:any;
}
export interface e_code_mapInstance extends Sequelize.Instance<e_code_mapAttribute>, e_code_mapAttribute { }
export interface e_code_mapModel extends Sequelize.Model<e_code_mapInstance, e_code_mapAttribute> { }

// table: transaction
export interface transactionAttribute {
	id:any;
	account_id?:any;
	lp_id?:any;
	charges_id?:any;
	last_update?:any;
	status?:any;
	recipient?:any;
	in_datetime?:any;
	out_datetime?:any;
}
export interface transactionInstance extends Sequelize.Instance<transactionAttribute>, transactionAttribute { }
export interface transactionModel extends Sequelize.Model<transactionInstance, transactionAttribute> { }

// table: user_info
export interface user_infoAttribute {
	account_id:any;
	firstname?:any;
	lastname?:any;
	line_id?:any;
	email?:any;
	citizen_id?:any;
}
export interface user_infoInstance extends Sequelize.Instance<user_infoAttribute>, user_infoAttribute { }
export interface user_infoModel extends Sequelize.Model<user_infoInstance, user_infoAttribute> { }
