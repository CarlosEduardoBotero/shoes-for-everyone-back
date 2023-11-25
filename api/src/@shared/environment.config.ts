import * as dotenv from "dotenv";

dotenv.config();

export const environment = {
  dataBase: dataBase(),
  corsOptions: corsOptions(),
  jwtConstants: jwtConstants(),
  siteOptions: siteOptions(),
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

function corsOptions() {
  return {
    origin: process.env.CORS_ORIGIN || ['http://localhost:3000'],
    methods: 'GET,PATCH,POST',
  };
}

function jwtConstants() {
  return {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '36000s',
  };
}

function siteOptions() {
  return {
    title: process.env.SITE_TITLE || 'e-commerce API',
    description: process.env.SITE_DESCRIPTION || 'e-commerce API',
    swaggerSiteTitle: process.env.SITE_CUSTOM_TITLE || 'Swagger e-commerce',
  };
}
