import { Injectable } from '@nestjs/common';
import { UpdateComponentDto } from './dto/update-component.dto';
import { Repository } from 'typeorm';
import { Component } from './entities/component.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ComponentsService {
  constructor(
    @InjectRepository(Component)
    private readonly repository: Repository<Component>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updateComponentDto: UpdateComponentDto) {
    const updateComponent = await this.repository.preload({
      id,
      ...updateComponentDto,
    });
    return this.repository.save(updateComponent);
  }
}
