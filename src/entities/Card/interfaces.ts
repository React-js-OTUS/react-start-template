export enum EGoodsSizes {
  S = 's',
  M = 'm',
  XL = 'xl',
  XXL = 'xxl',
}

export interface IGoodsItem {
  id: number;
  isInStock: boolean;
  title: string;
  details: string | string[];
  price: number;
  imageListing: string;
  imageFull: string[];
  colors: string[];
  sizes: EGoodsSizes[];
}
