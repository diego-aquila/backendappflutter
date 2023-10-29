import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RequisitosModule } from './requisitos/requisitos.module';
import { ClassesModule } from './classes/classes.module';
import { ExamsModule } from './exams/exams.module';
import { ExamUserModule } from './exam-user/exam-user.module';
import { RolesModule } from './roles/roles.module';
import { PlansModule } from './plans/plans.module';
import { MuralModule } from './mural/mural.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConflictInterceptor } from './common/filters/http-exception/errors/interceptors/conflict.interceptor copy';
import { DatabaseInterceptor } from './common/filters/http-exception/errors/interceptors/databse.interceptor copy';
import { NotFoundInterceptor } from './common/filters/http-exception/errors/interceptors/notfound.interceptor';
import { UnauthorizedInterceptor } from './common/filters/http-exception/errors/interceptors/unauthorized.interceptor';

@Module({
  imports: [
    UsersModule,
    RequisitosModule,
    ClassesModule,
    ExamsModule,
    ExamUserModule,
    RolesModule,
    PlansModule,
    MuralModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ConflictInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: DatabaseInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: NotFoundInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: UnauthorizedInterceptor,
    },
  ],
})
export class AppModule {}
