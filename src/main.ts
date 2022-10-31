import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true})
  ) // Permite que estoure uma excecao caso a req der erro
  console.log("BACKEND STARTED")
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
