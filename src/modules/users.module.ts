import { Module } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersController } from '../controllers/users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from '../repositories/users.repository';
import { TwilioService } from 'src/services/twilio.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UsersRepository, TwilioService],
})
export class UsersModule {}
