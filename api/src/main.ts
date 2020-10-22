import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('API Iventa.rio Time B')
  .setDescription('Essa API foi feita para o projeto Dash, implementado na Hacktudo 2020')
  .setVersion ('1.0')
  .addTag('Dash')
  .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api', app, document)
  await app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
