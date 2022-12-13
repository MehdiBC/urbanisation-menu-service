import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ComponentCategory } from '../enum/component-category.enum';

@Entity('components')
export class Component {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  quantity: number;
  @Column()
  category: ComponentCategory;
}
