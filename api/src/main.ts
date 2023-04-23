import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { HttpExceptionFilter } from './@exceptions/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { environment } from './@shared/environment.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // whitelist: true discard all the values which are not in dto
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Shoes for everyone')
    .setDescription('Shoes for everyone description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors(environment.corsOptions);

  await app.listen(3000);
}
bootstrap();
