"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("audit_logs", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      operation: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      requestPath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      requestMethod: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      responseStatus: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      responseMessage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      error: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      moduleId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "module_master",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      ipAddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deviceName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      operatingSystem: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      browser: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userAgent: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      isScheduler: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      schedulerName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      createdBy: {
        type: DataTypes.UUID,
        references: {
          model: "user",
          key: "id",
        },
        allowNull: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("audit_logs");
  },
};
