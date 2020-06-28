import * as path from 'path';

const baseDir = path.join(__dirname, '../../build/');
const entitiesPath = `${baseDir}${process.env.TYPEORM_ENTITIES}`;
const migrationPath = `${baseDir}${process.env.TYPEORM_MIGRATIONS}`;

export default {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: Number.parseInt(process.env.TYPEORM_PORT, 10),
    entities: [entitiesPath],
    migrations: [migrationPath],
    migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    cli: {
        migrationsDir: 'src/db/migrations',
        entitiesDir: 'src/db/entities',
    },
};
