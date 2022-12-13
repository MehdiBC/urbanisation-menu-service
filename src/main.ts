import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const CorsOptions = { origin: '*' };
  app.enableCors(CorsOptions);
  await app.listen(3000);
}

bootstrap().catch((e) => console.log(e));
