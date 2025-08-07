'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('user_session', {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
				allowNull: false,
				defaultValue: Sequelize.UUIDV4,
			},
			userId: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'user',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'RESTRICT',
			},
			deviceName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			deviceId: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			os: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			ip: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			location: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			userAgent: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			timeZone: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			browser: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			logoutTime: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			expireTime: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			deletedAt: {
				type: Sequelize.DATE,
				allowNull: true,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('user_session');
	},
};
