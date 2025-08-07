'use strict';

module.exports = {
	async up(queryInterface, DataTypes) {
		return Promise.all([queryInterface.removeColumn('module_master', 'dbId')]);
	},

	async down(queryInterface, DataTypes) {
		return Promise.all([
			queryInterface.addColumn('module_master', 'dbId', {
				type: DataTypes.STRING,
				allowNull: true,
			}),
		]);
	},
};
