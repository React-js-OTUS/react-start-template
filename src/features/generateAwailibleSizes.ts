import { EGoodsSizes } from '../entities/interfaces';
import generateRandomNumber from './generateRandomNumber';

const generateRandomSizes = (number: number): EGoodsSizes[] => {
  switch (number) {
    case 1:
      return [EGoodsSizes.XXL];
    case 2:
      return [EGoodsSizes.XL];
    case 3:
      return [EGoodsSizes.M];
    case 4:
      return [EGoodsSizes.S];
    case 5:
      return [EGoodsSizes.S, EGoodsSizes.XL];
    case 6:
      return [EGoodsSizes.M, EGoodsSizes.XL];
    case 7:
      return [EGoodsSizes.S, EGoodsSizes.XXL];
    case 8:
      return [EGoodsSizes.XL, EGoodsSizes.XXL];
    case 9:
      return [EGoodsSizes.S, EGoodsSizes.M];
    case 10:
      return [EGoodsSizes.M, EGoodsSizes.XL, EGoodsSizes.XXL];
    case 11:
      return [EGoodsSizes.S, EGoodsSizes.XL, EGoodsSizes.XXL];
    case 12:
      return [EGoodsSizes.S, EGoodsSizes.M, EGoodsSizes.XXL];
    case 13:
      return [EGoodsSizes.S, EGoodsSizes.M, EGoodsSizes.XL];
    default:
      return [EGoodsSizes.S, EGoodsSizes.M, EGoodsSizes.XL, EGoodsSizes.XXL];
  }
};

const generateAwailibleSizes = (inStock: boolean) => (inStock ? generateRandomSizes(generateRandomNumber(0, 14)) : []);

export default generateAwailibleSizes;
