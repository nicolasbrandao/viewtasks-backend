import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
  const config = new DocumentBuilder()
    .setTitle('Just To-Do it')
    .setDescription('Task Management App')
    .setVersion('1.0')
    .addTag('To-Do')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors(corsOptions);
  await app.listen(port, host, listenCb);
}
bootstrap();
