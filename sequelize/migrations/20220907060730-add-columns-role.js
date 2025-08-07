'use strict';

module.exports = {
	async up(queryInterface, DataTypes) {
		return Promise.all([
			queryInterface.addColumn('role', 'level', {
				type: DataTypes.INTEGER,
				allowNull: true,
			}),
		]);
	},

	async down(queryInterface, DataTypes) {
		return Promise.all([queryInterface.removeColumn('role', 'level')]);
	},
};
