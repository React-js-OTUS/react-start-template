import React, { useContext } from 'react';
import { Modal } from '../../modal';
import { Header } from '../../header/ui/Header';
import { FullDisplay } from '../../fullDisplay/ui/FullDisplay';
import { Theme, ThemeContext } from '../../../app/providers/ThemProviders';
import cls from './layout.module.scss';

export const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Header />
      <div className={theme === Theme.LIGHT ? cls.containerLight : cls.containerDark}>
        <FullDisplay
          name="Income"
          date={new Date()}
          sumOperations={20}
          categoryName="Voice"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quisquam?"
        />
      </div>
      <Modal visible={false} />
    </div>
  );
};
