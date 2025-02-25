import { Module } from '@nestjs/common';
import { HintsController } from './hints.controller';
import { HintsService } from './hints.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hints } from './hints.entity';
import { PuzzlesModule } from 'src/puzzles/puzzles.module';

@Module({
  imports: [TypeOrmModule.forFeature([Hints]), PuzzlesModule],
  controllers: [HintsController],
  providers: [HintsService],
  exports: [HintsService],
  
})
export class HintsModule {}
