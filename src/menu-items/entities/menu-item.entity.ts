import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MenuItemCategory } from '../enum/menu-item-category.enum';
import { Component } from '../../components/entities/component.entity';

@Entity('menu-items')
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  rate: number;
  @Column({ name: 'image_path' })
  imagePath: string;
  @Column()
  available: boolean;
  @Column()
  category: MenuItemCategory;
  @ManyToMany(() => Component, { cascade: true, eager: true })
  @JoinTable()
  components: Component[];
}
