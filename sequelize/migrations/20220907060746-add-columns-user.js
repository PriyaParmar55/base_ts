'use strict';

module.exports = {
    async up(queryInterface, DataTypes) {
        return Promise.all([
            queryInterface.addColumn('user', 'isPasswordChangeRequired', {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            }),
        ]);
    },

    async down(queryInterface, DataTypes) {
        return Promise.all([queryInterface.removeColumn('user', 'isPasswordChangeRequired')]);
    },
};
