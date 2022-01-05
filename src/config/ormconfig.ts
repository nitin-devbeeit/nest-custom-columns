import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions"
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

const postgres_development_configuration:PostgresConnectionOptions  = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: 'postgres',
    password: 'root' ,
    database: 'db_custom_columns',
    synchronize: false, // It should always be false for production because if we change the entity then it synchronize it with tables and thus it drops the previous table.
    logging: true,
    //namingStrategy: new SnakeNamingStrategy(),
    entities: ['dist/database/entities/*.entity.js'],
    migrations: ['dist/database/migrations/*.js'],
    migrationsTransactionMode: 'all',
    cli: {
      entitiesDir: 'src/database/entities',
      migrationsDir: 'src/database/migrations',
    },
}

export default postgres_development_configuration