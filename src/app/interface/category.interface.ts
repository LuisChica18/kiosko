import { MenuItem } from './menu-item.interface';

export interface Category {
  id: number;
  name: string;
  icon: string;
  items: MenuItem[];
}