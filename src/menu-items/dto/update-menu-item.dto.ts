import { MenuItemCategory } from '../enum/menu-item-category.enum';

export class UpdateMenuItemDto {
  name: string;
  description: string;
  price: number;
  category: MenuItemCategory;
  rate: number;
  imagePath: string;
  available: boolean;
  components: number[];
}
