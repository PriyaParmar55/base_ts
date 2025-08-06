'use strict';
module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('module_master', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            type: {
                type: DataTypes.ENUM('1', '2', '3'),
                allowNull: false,
                defaultValue: '1',
                comment: '1 for group, 2 for module, 3 for right',
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM('1', '0'),
                allowNull: false,
                defaultValue: '1',
            },
            parentId: {
                type: DataTypes.UUID,
                references: {
                    model: 'module_master',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT',
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
                allowNull: true,
                type: DataTypes.DATE,
            },
            updatedBy: {
                type: DataTypes.UUID,
                references: {
                    model: 'user',
                    key: 'id',
                },
                allowNull: true,
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT',
            },
        });
    },
    async down(queryInterface, DataTypes) {
        await queryInterface.dropTable('module_master');
    },
};
