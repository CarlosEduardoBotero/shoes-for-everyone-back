import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { HttpExceptionFilter } from './@exceptions/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { environment } from './@shared/environment.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // whitelist: true discard all the values which are not in dto. Related with 'class-validator'
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // Swagger config
  const config = new DocumentBuilder()
    .setTitle(`${environment.siteOptions.title}`)
    .setDescription(`${environment.siteOptions.description}`)
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: `${environment.siteOptions.swaggerSiteTitle}`,
    swaggerOptions: {
      docExpansion: 'none',
    },
  });

  app.enableCors(environment.corsOptions);

  await app.listen(3000);
}
bootstrap();
