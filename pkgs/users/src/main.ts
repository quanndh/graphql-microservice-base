import './dotenv-config';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import compression from 'compression';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { HttpExceptionFilter } from './middlewares/HttpExceptionFilter';
import * as bodyParser from 'body-parser';
import { UserInputError } from 'apollo-server-errors';
const PORT = parseInt(process.env.PORT ?? '3000', 10);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: process.env.NODE_ENV === 'production' ? false : ['error', 'debug', 'warn'],
    bodyParser: true,
    cors: true,
  });

  app.use(cookieParser());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.useStaticAssets('uploads', {
    prefix: '/uploads',
    immutable: true,
    maxAge: 365 * 24 * 60 * 60 * 1000, // 365 days
    etag: true,
    extensions: [
      'jpeg',
      'jpg',
      'png',
      'gif',
      'svg',
      'mp4',
      'pdf',
      'doc',
      'docx',
      'xlsx',
      'xls',
      'ppt',
      'pptx',
      'webp',
      'zip',
    ],
  });

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      disableErrorMessages: false,
      validateCustomDecorators: false,
      dismissDefaultMessages: true,
      exceptionFactory: (errors) => {
        const errData: Record<string, any> = {};
        errors.map((v) => {
          errData[v.property] = v.constraints;
        });
        throw new UserInputError('Validation failed', errData);
      },
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(
    helmet({
      contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false,
    }),
  );
  app.use(compression());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(PORT);
  console.info(`Application is running on: ${await app.getUrl()}`);
}
bootstrap().finally(() => {
  //
});
