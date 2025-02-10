import { EGoodsSizes } from '../../entities/interfaces';

export interface IBasketGoodsItem {
  size: EGoodsSizes;
  color: string;
  counter: number;
  title: string;
  price: number;
  image: string;
}
