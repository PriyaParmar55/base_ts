import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize-typescript';
import { DATABASE_URL } from '../config';

const initSequelize = () => {
	const basename = path.basename(__filename);

	const sequelize = new Sequelize(DATABASE_URL, {
		dialect: 'mysql',
		logging: false,
		models: [],
	});

	const modelFiles = fs.readdirSync(__dirname).filter((file) => {
		const isNotIndex = file !== basename;
		const isNotDts = !file.endsWith('.d.ts');
		const isModelFile = file.endsWith('.ts') || file.endsWith('.js');
		const isNotInterfaces = file !== 'interfaces';
		return isNotIndex && isModelFile && isNotDts && isNotInterfaces;
	});

	const models = modelFiles.map((file) => {
		const modelPath = path.join(__dirname, file);
		const imported = require(modelPath);
		return imported?.default;
	});

	sequelize.addModels(models);
	return sequelize;
};

const db = initSequelize();

export default db;
