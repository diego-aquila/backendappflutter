import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';
import { UnauthorizedInterceptor } from './common/filters/http-exception/errors/interceptors/unauthorized.interceptor';
import { NotFoundInterceptor } from './common/filters/http-exception/errors/interceptors/notfound.interceptor';
import { ConflictInterceptor } from './common/filters/http-exception/errors/interceptors/conflict.interceptor copy';
import { DatabaseInterceptor } from './common/filters/http-exception/errors/interceptors/databse.interceptor copy';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ConflictInterceptor());
  app.useGlobalInterceptors(new DatabaseInterceptor());
  app.useGlobalInterceptors(new NotFoundInterceptor());
  app.useGlobalInterceptors(new UnauthorizedInterceptor());
  await app.listen(3000);
}
bootstrap();
