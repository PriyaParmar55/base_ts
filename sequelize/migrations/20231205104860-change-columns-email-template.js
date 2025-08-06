'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.removeColumn('email_template', 'emailTemplateCategoryId'),
            queryInterface.removeColumn('email_template', 'body'),
            queryInterface.removeColumn('email_template', 'design'),
            queryInterface.removeColumn('email_template', 'description'),
            queryInterface.addColumn('email_template', 'code', {
                type: Sequelize.TEXT,
                allowNull: false,
            }),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn('email_template', 'emailTemplateCategoryId', {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'email_template_category',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT',
            }),
            queryInterface.addColumn('email_template', 'body', {
                type: Sequelize.TEXT,
                allowNull: false,
            }),
            queryInterface.addColumn('email_template', 'design', {
                type: Sequelize.TEXT,
                allowNull: false,
            }),
            queryInterface.addColumn('email_template', 'description', {
                type: Sequelize.STRING,
                allowNull: true,
            }),
            queryInterface.removeColumn('email_template', 'code'),
        ]);
    },
};
