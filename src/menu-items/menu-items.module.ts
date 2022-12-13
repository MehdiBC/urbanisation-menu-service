import { Module } from '@nestjs/common';
import { MenuItemsService } from './menu-items.service';
import { MenuItemsController } from './menu-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItem } from './entities/menu-item.entity';
import { Component } from '../components/entities/component.entity';

@Module({
  controllers: [MenuItemsController],
  providers: [MenuItemsService],
  imports: [TypeOrmModule.forFeature([MenuItem, Component])],
})
export class MenuItemsModule {}
