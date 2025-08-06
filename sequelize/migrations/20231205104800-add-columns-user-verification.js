'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn('user_verification_links', 'email', {
                type: Sequelize.STRING,
                allowNull: true,
            }),
            queryInterface.addColumn('user_verification_links', 'type', {
                type: Sequelize.ENUM('1', '2'),
                allowNull: true,
                comment: '1 For Forget Password, 2 for Email Verification',
            }),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.removeColumn('user_verification_links', 'email'),
            queryInterface.removeColumn('user_verification_links', 'type'),
        ]);
    },
};
