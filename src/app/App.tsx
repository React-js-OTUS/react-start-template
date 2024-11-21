import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Products } from '../pages/products/Products';
import { NotFound } from '../pages/notFound/NotFound';
import Profile from '../pages/profile/ProfileScreen';
import { I18nextProvider } from 'react-i18next';
import i18n from '../shared/i18n';
import { ThemeProvider } from '../components/header/ThemeContext';
import Cart from 'src/components/cart/Cart';
import img1 from 'src/shared/images/image1.jpg';
import img2 from 'src/shared/images/image2.jpg';

function App() {
  const [items, setItems] = React.useState([
    {
      id: '1',
      imageUrl: img1,
      description: 'Кроссовки Nike',
      price: 5999,
    },
    {
      id: '2',
      imageUrl: img2,
      description: 'Кроссовки Adidas',
      price: 7499,
    },
  ]);

  const discount = 10; // 10% скидка

  const handleRemove = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart items={items} discount={discount} onRemove={handleRemove} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
