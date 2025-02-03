import React from 'react';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { goods } from '../../assets/goods';
import { Container, ShortCard } from '../../entities';
import { IGoodsItem } from '../../entities/interfaces';
import { Btn } from '../../shared';
import generateRandomCardList from '../../features/generateRandomCardList';

export const StoreList: React.FC = () => {
  const [myGoods, setMyGoods] = React.useState<IGoodsItem[]>([]);
  const [lastId, setLastId] = React.useState<number>(goods[goods.length - 1].id);

  React.useLayoutEffect(() => {
    const onlyAwailible: IGoodsItem[] = goods.filter((el) => el.isInStock);
    const onlyUnAwailible: IGoodsItem[] = goods.filter((el) => !el.isInStock);
    const newGoods: IGoodsItem[] = [...onlyAwailible, ...onlyUnAwailible];

    setMyGoods(newGoods);
  }, []);

  const cardGenerator = () => {
    const newCount = 3;
    const newGoods: IGoodsItem[] = generateRandomCardList(lastId, newCount);
    setMyGoods([...myGoods, ...newGoods]);
    setLastId(lastId + newCount);
  };

  const { t } = useTranslation();

  return (
    <Container>
      <ul className="grid grid-cols-3 mb-4">
        {myGoods.map((item) => (
          <li key={nanoid()}>
            <ShortCard {...item} />
          </li>
        ))}
      </ul>
      <div className="flex gap-3">
        <Btn onClick={cardGenerator}>{t('listPage.addMore')}</Btn>
      </div>
    </Container>
  );
};
