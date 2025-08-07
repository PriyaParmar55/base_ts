'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('email_template_category', {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
				allowNull: false,
				defaultValue: Sequelize.UUIDV4,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			status: {
				type: Sequelize.ENUM('0', '1'),
				allowNull: false,
				defaultValue: '1',
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			createdBy: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'user',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			updatedBy: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'user',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			},
			deletedAt: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			deletedBy: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'user',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('email_template_category');
	},
};
