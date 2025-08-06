'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn('user_session', 'activeDate', {
                type: Sequelize.DATE,
                allowNull: true,
            }),
            queryInterface.addColumn('user_session', 'isMockLogin', {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            }),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.removeColumn('user_session', 'activeDate'),
            queryInterface.removeColumn('user_session', 'isMockLogin'),
        ]);
    },
};
