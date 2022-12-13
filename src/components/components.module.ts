import { Module } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { ComponentsController } from './components.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Component } from './entities/component.entity';

@Module({
  controllers: [ComponentsController],
  providers: [ComponentsService],
  imports: [TypeOrmModule.forFeature([Component])],
})
export class ComponentsModule {}
