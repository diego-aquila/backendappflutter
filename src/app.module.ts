import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RequisitosModule } from './requisitos/requisitos.module';
import { ClassesModule } from './classes/classes.module';
import { ExamsModule } from './exams/exams.module';
import { ExamUserModule } from './exam-user/exam-user.module';

@Module({
  imports: [UsersModule, RequisitosModule, ClassesModule, ExamsModule, ExamUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
