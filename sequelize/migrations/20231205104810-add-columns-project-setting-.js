'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		return Promise.all([
			queryInterface.addColumn('project_setting', 'companyLogoHeight', {
				type: Sequelize.STRING,
				allowNull: true,
			}),
			queryInterface.addColumn('project_setting', 'companyLogoWidth', {
				type: Sequelize.STRING,
				allowNull: true,
			}),
		]);
	},

	async down(queryInterface, Sequelize) {
		return Promise.all([
			queryInterface.removeColumn('project_setting', 'companyLogoHeight'),
			queryInterface.removeColumn('project_setting', 'companyLogoWidth'),
		]);
	},
};
