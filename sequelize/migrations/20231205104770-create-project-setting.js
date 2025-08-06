'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('project_setting', {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
            },
            logo: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            loader: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            icon: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            favicon: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            copyRightName: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            copyRightLink: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            footerText2: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            displayFooter2: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            projectName: {
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
        await queryInterface.dropTable('project_setting');
    },
};
