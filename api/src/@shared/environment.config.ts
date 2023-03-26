require('dotenv').config();

export const environment = {
  dataBase: dataBase(),
};

function dataBase() {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (DATABASE_URL !== undefined) {
    return {
      url: DATABASE_URL,
    };
  } else {
    return {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    };
  }
}
