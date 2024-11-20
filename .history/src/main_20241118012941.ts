import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {

  const logger = new Logger('ORDERS MAIN');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>
    (
      AppModule, {
      /*transport: Transport.TCP,
      options: {
        port: envs.port
      }
    }
    );

  //app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  //await app.listenAsync();
  //await app.listen();
  //logger.log("ORDERS-MICROSERVICE ACTIVATE");
  app.listen()
    .then(() => {
      logger.log(`ORDERS-MICROSERVICE ACTIVATED; PORT: ${envs.port}`);
    })
    .catch((error) => {
      logger.error('ORDERS-MICROSERVICES FAILED TO START', error);
    });
}
bootstrap();
