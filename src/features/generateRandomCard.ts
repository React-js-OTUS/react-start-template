import { goods } from '../assets/goods';
import { EGoodsSizes, IGoodsItem } from '../entities/interfaces';
import generateRandomNumber from './generateRandomNumber';
import generateAwailibleSizes from './generateAwailibleSizes';
import generateAwailibleColors from './generateAwailibleColors';

const generateRandomCard = (lastId: number): IGoodsItem => {
  const useCurrentGood: IGoodsItem = goods[generateRandomNumber(0, 9)];
  const newPrice: number = generateRandomNumber(50, 250);
  const isInStock: boolean = generateRandomNumber(0, 1) > 0 ? true : false;
  const awailibleSizes: EGoodsSizes[] = generateAwailibleSizes(isInStock);
  const awailibleColors: string[] = generateAwailibleColors(generateRandomNumber(1, 7));

  return {
    ...useCurrentGood,
    id: lastId + 1,
    price: newPrice,
    isInStock: isInStock,
    sizes: awailibleSizes,
    colors: awailibleColors,
  };
};

export default generateRandomCard;
