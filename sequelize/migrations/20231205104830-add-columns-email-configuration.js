'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn('email_configuration', 'replyTo', {
                type: Sequelize.STRING,
                allowNull: true,
            }),
            queryInterface.addColumn('email_configuration', 'senderEmail', {
                type: Sequelize.STRING,
                allowNull: true,
            }),
            queryInterface.removeColumn('email_configuration', 'service'),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.removeColumn('email_configuration', 'replyTo'),
            queryInterface.removeColumn('email_configuration', 'senderEmail'),
            queryInterface.addColumn('email_configuration', 'service', {
                type: Sequelize.ENUM('1'),
                allowNull: true,
                comment: '1 for Gmail',
            }),
        ]);
    },
};
