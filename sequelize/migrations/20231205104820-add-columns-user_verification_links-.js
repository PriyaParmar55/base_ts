'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn('user_verification_links', 'code', {
                type: Sequelize.STRING,
                allowNull: true,
            }),
            queryInterface.addColumn('user_verification_links', 'count', {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            }),
            queryInterface.addColumn('user_verification_links', 'validationDate', {
                type: Sequelize.DATE,
                allowNull: true,
            }),
            queryInterface.changeColumn('user_verification_links', 'token', {
                type: Sequelize.STRING,
                allowNull: true,
            }),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.removeColumn('user_verification_links', 'code'),
            queryInterface.removeColumn('user_verification_links', 'count'),
            queryInterface.removeColumn('user_verification_links', 'validationDate'),
            queryInterface.changeColumn('user_verification_links', 'token', {
                type: Sequelize.STRING,
                allowNull: true,
            }),
        ]);
    },
};
