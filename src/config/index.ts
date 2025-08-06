import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

export const sequelize = new Sequelize({
  username: "root",
  password: "root",
  database: "base_db",
  host: "127.0.0.1",
  dialect: "mysql",
  models: [path.resolve(__dirname, "../models")], // auto-load models
  logging: false,
});
