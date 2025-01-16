import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as any,
    models: [__dirname + '/../models'], // Path to models
});

export default sequelize;
