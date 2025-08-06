'use strict';
module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('audit_logs_details', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            auditLogId: {
                type: DataTypes.UUID,
                references: {
                    model: 'audit_logs',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT',
            },
            documentId: {
                type: DataTypes.UUID,
                allowNull: true,
            },
            model: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            duration: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            oldValues: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            newValues: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            affectedColumns: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            operation: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            query: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            body: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: true,
                type: DataTypes.DATE,
                onUpdate: DataTypes.literal('CURRENT_TIMESTAMP'),
            },
        });
    },
    async down(queryInterface, DataTypes) {
        await queryInterface.dropTable('audit_logs_details');
    },
};
