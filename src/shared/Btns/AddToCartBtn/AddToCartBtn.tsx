import React from 'react';
import { IBtn, ICounter } from '../../../shared/interfaces';
import { Btn, Counter } from '../../../shared';

export const AddToCartBtn: React.FC<IBtn & ICounter> = ({ isDisabled, counter, children }) => {
  if (counter > 0) {
    return <Counter counter={counter} />;
  }

  return (
    <Btn onClick={() => null} isDisabled={isDisabled}>
      <div className="flex justify-center items-center gap-[6px]">
        {children}
        <img
          src="https://raw.githubusercontent.com/furtivite/cdn.furtivite.github.io/refs/heads/main/images/add-to-cart.svg"
          alt=""
          width={25}
          height={24}
        />
      </div>
    </Btn>
  );
};
