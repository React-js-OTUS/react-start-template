import React, { useState } from 'react';
import './header.css';
import { useTranslation } from 'react-i18next';
import NavBar from '../../components/navbar/NavBar';
import { LanguageToggle } from './LanguageToggle';
import { Logo } from 'src/components/logo/Logo';
import { Button } from 'src/shared/ui/button/Button';
import { Modal } from 'src/components/modal/Modal';

import LoginForm from 'src/components/forms/LoginForm';
import RegisterForm from 'src/components/forms/RegisterForm';
import ProductForm from 'src/components/forms/ProductForm';
import ThemeToggle from 'src/components/header/ThemeToggle';

import { sneakers } from 'src/shared/sneakers';
import { useAuth } from 'src/shared/hooks/AuthContext';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  const links = [
    { label: t('home'), href: '/' },
    { label: t('profile'), href: '/profile' },
    { label: t('cart'), href: '/cart' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenModal2 = () => setIsModalOpen2(true);
  const handleCloseModal2 = () => setIsModalOpen2(false);

  const handleOpenModal3 = () => setIsModalOpen3(true);
  const handleCloseModal3 = () => setIsModalOpen3(false);

  const [products, setProducts] = useState<{ name: string; price: number; imageUrl: string; description: string }[]>(
    []
  );

  const handleSaveProduct = (newProduct: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
  }) => {
    setProducts((prev) => [...prev, newProduct]);

    sneakers.push(newProduct);
    console.log(sneakers);
    setProducts([...sneakers]);

    setIsModalOpen(false);
  };

  const { isAuthenticated, login, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-item">
        <Logo />
        <NavBar links={links} />
      </div>

      <div className="header-item">
        <ThemeToggle />
        <LanguageToggle />

        {/*{isAuthenticated ? (*/}
        {/*    <button onClick={logout}>Выйти</button>*/}
        {/*) : (*/}
        {/*    <button onClick={() => login('dummy-token')}>Войти</button>*/}
        {/*)}*/}

        <div className="items">
          <Button label={t('login')} onClick={handleOpenModal} />
          <Button label={t('register')} onClick={handleOpenModal2} />
        </div>

        <div className="items">
          <Button label={t('new_product')} onClick={handleOpenModal3} />
        </div>

        {isModalOpen && (
          <Modal visible={isModalOpen} onClose={handleCloseModal}>
            <LoginForm />
          </Modal>
        )}

        {isModalOpen2 && (
          <Modal visible={isModalOpen2} onClose={handleCloseModal2}>
            <RegisterForm />
          </Modal>
        )}

        {isModalOpen3 && (
          <Modal visible={isModalOpen3} onClose={handleCloseModal3}>
            <ProductForm onSave={handleSaveProduct} />
          </Modal>
        )}
      </div>
    </header>
  );
};
