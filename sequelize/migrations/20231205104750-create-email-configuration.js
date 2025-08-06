'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('email_configuration', {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
            },
            emailType: {
                type: Sequelize.ENUM('1', '2'),
                allowNull: false,
                comment: '1 for Send Grid, 2 for SMTP',
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            bcc: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            host: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            port: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            service: {
                type: Sequelize.ENUM('1'),
                allowNull: true,
                comment: '1 for Gmail',
            },
            apiKey: {
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
        await queryInterface.dropTable('email_configuration');
    },
};
