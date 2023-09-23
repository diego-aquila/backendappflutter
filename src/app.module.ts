import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RequisitosModule } from './requisitos/requisitos.module';

@Module({
  imports: [UsersModule, RequisitosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
