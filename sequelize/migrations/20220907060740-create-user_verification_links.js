'use strict';
module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('user_verification_links', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            userId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT',
            },
            token: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM('1', '0'),
                allowNull: false,
                defaultValue: '1',
                comment: '1 Active, 0 InActive',
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                onCreate: DataTypes.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                allowNull: true,
                type: DataTypes.DATE,
                onUpdate: DataTypes.literal('CURRENT_TIMESTAMP'),
            },
            deletedAt: {
                allowNull: true,
                type: DataTypes.DATE,
            },
        });
    },
    async down(queryInterface, DataTypes) {
        await queryInterface.dropTable('user_verification_links');
    },
};
