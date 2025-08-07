'use strict';
module.exports = {
	async up(queryInterface, DataTypes) {
		await queryInterface.createTable('permission', {
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: false,
				defaultValue: DataTypes.UUIDV4,
			},
			roleId: {
				type: DataTypes.UUID,
				references: {
					model: 'role',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			moduleId: {
				type: DataTypes.UUID,
				references: {
					model: 'module_master',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			createdBy: {
				type: DataTypes.UUID,
				references: {
					model: 'user',
					key: 'id',
				},
				allowNull: true,
				onUpdate: 'CASCADE',
				onDelete: 'RESTRICT',
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		});
	},
	async down(queryInterface, DataTypes) {
		await queryInterface.dropTable('permission');
	},
};
