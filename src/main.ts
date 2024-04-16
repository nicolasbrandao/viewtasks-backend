import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const corsOptions: CorsOptions = {
  origin: process.env.ALLOWED_ORIGIN,
};

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const listenCb = () => {
  console.log(`Listening on: ${host}:${port}`);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(port, host, listenCb);
}
bootstrap();
