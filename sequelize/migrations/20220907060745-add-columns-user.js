'use strict';

module.exports = {
	async up(queryInterface, DataTypes) {
		return Promise.all([
			queryInterface.addColumn('user', 'isEmailVerified', {
				type: DataTypes.ENUM('0', '1'),
				allowNull: false,
				defaultValue: '0',
			}),
		]);
	},

	async down(queryInterface, DataTypes) {
		return Promise.all([queryInterface.removeColumn('user', 'isEmailVerified')]);
	},
};
