import { IGoodsItem } from '../entities/interfaces';
import generateRandomCard from './generateRandomCard';

const generateRandomCardList = (lastId: number, count: number): IGoodsItem[] => {
  const newArr: IGoodsItem[] = [];
  for (let i = 1; i <= count; i++) {
    newArr.push(generateRandomCard(lastId + i));
  }
  return newArr;
};

export default generateRandomCardList;
