import React from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { IGoodsItem } from '../../../entities/interfaces';

export const CardImage: React.FC<Partial<IGoodsItem>> = ({ imageFull }) => {
  const [sliderNumber, setSliderNumber] = React.useState<number>(0);

  const changeSlider = (id: number): void => {
    setSliderNumber(id);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-w-100 aspect-square rounded">
      <img src={imageFull[sliderNumber]} alt="" />
      <div className="flex gap-3">
        {imageFull.map((item, index) => {
          const btnClassName = clsx(
            'w-2',
            'aspect-square',
            index === sliderNumber ? 'bg-b-900' : 'bg-b-200',
            'rounded-full'
          );

          return (
            <button key={nanoid()} className={btnClassName} onClick={() => changeSlider(index)}>
              <span className="sr-only">Выбрать изображение №{index}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
