import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { TwilioService } from 'src/services/twilio.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UsersRepository, TwilioService],
})
export class UsersModule {}
