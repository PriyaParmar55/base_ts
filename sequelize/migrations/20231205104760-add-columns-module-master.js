'use strict';

module.exports = {
	async up(queryInterface, DataTypes) {
		return Promise.all([
			queryInterface.addColumn('module_master', 'level', {
				type: DataTypes.INTEGER,
				allowNull: true,
			}),
			queryInterface.addColumn('module_master', 'icon', {
				type: DataTypes.STRING,
				allowNull: true,
			}),
			queryInterface.addColumn('module_master', 'label', {
				type: DataTypes.STRING,
				allowNull: true,
			}),
			queryInterface.addColumn('module_master', 'dbId', {
				type: DataTypes.STRING,
				allowNull: true,
			}),
			queryInterface.addColumn('module_master', 'route', {
				type: DataTypes.STRING,
				allowNull: true,
			}),
		]);
	},

	async down(queryInterface, DataTypes) {
		return Promise.all([
			queryInterface.removeColumn('module_master', 'level'),
			queryInterface.removeColumn('module_master', 'icon'),
			queryInterface.removeColumn('module_master', 'label'),
			queryInterface.removeColumn('module_master', 'dbId'),
			queryInterface.removeColumn('module_master', 'route'),
		]);
	},
};
