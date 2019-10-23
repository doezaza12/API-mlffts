"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('lp_info', {
        'id': {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            comment: "null",
            autoIncrement: true
        },
        'license_number': {
            type: DataTypes.STRING(10),
            allowNull: true,
            comment: "เลขทะเบียนรถ"
        },
        'province': {
            type: DataTypes.STRING(20),
            allowNull: true,
            comment: "จังหวัด"
        }
    }, {
        tableName: 'lp_info',
        timestamps: false
    });
};
//# sourceMappingURL=lp_info.js.map