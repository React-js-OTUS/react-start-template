export enum EGoodsSizes {
  S = 's',
  M = 'm',
  XL = 'xl',
  XXL = 'xxl',
}

export interface IGoogsColor {
  colors: string[];
}

export interface IGoodsSizes {
  sizes: EGoodsSizes[];
}

export interface IGoodsItem extends IGoogsColor, IGoodsSizes {
  id: number;
  isInStock: boolean;
  title: string;
  details: string | string[];
  price: number;
  imageListing: string;
  imageFull: string[];
  colors: string[];
}
