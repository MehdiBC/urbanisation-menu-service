import { ComponentCategory } from '../enum/component-category.enum';

export class UpdateComponentDto {
  name: string;
  quantity: number;
  category: ComponentCategory;
}
