import { Injectable } from '@nestjs/common';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { In, Repository } from 'typeorm';
import { MenuItem } from './entities/menu-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Component } from '../components/entities/component.entity';

@Injectable()
export class MenuItemsService {
  constructor(
    @InjectRepository(MenuItem)
    private readonly repository: Repository<MenuItem>,
    @InjectRepository(Component)
    private readonly componentRepository: Repository<Component>,
  ) {}

  async create(menuItem: any) {
    return this.repository.save(menuItem);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updateMenuItemDto: UpdateMenuItemDto) {
    const components = await this.componentRepository.findBy({
      id: In(updateMenuItemDto.components),
    });
    const updateComponent = await this.repository.preload({
      id,
      ...updateMenuItemDto,
      components,
    });
    return this.repository.save(updateComponent);
  }
}
