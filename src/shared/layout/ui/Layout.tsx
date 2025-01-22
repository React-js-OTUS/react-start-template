import React from 'react';
import { Modal } from '../../modal';
import { Header } from '../../header/ui/Header';
import cls from './layout.module.scss';
import { FullDisplay } from '../../fullDisplay/ui/FullDisplay';

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={cls.container}>
        <FullDisplay
          name="Income"
          date={new Date()}
          sumOperations={20}
          categoryName="Voice"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quisquam?"
        />
      </div>
      <Modal visible={false} />
    </>
  );
};
