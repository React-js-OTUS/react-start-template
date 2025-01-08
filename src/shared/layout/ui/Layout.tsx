import React from 'react';
import { Modal } from 'src/shared/modal';
import { Header } from 'src/shared/header/ui/Header';
import { OperationDisplay } from 'src/shared/operationDisplay/ui/OperationDisplay';
import cls from './layout.module.scss';
import { FullDisplay } from 'src/shared/fullDisplay/ui/FullDisplay';

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
