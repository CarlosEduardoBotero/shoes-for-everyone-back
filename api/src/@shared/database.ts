import { environment } from './environment.config';

export function databaseConfig() {
  const db_config = {
    type: 'postgres' as 'postgres',
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrations: ['dist/migrations/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
    subscribers: [],
    synchronize: false,
  };
  // Add to db_config database connection according to received env vars
  if (environment.dataBase.url !== undefined) {
    db_config['url'] = environment.dataBase.url;
  } else {
    db_config['host'] = environment.dataBase.host;
    db_config['port'] = environment.dataBase.port;
    db_config['database'] = environment.dataBase.database;
    db_config['username'] = environment.dataBase.username;
    db_config['password'] = environment.dataBase.password;
  }

  return db_config;
}
