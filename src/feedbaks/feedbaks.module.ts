import { Module } from '@nestjs/common';
import { FeedbaksService } from './feedbaks.service';
import { FeedbaksController } from './feedbaks.controller';

@Module({
  controllers: [FeedbaksController],
  providers: [FeedbaksService]
})
export class FeedbaksModule {}
