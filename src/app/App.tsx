import React, { useEffect, useState } from 'react';
import cn from 'clsx';
import style from './App.css';
import Layout from '../shared/ui/Layout/Layout';
import './localization';
import { profileMenuItems, authMenuItems, shopMenuItems, adminMenuItems } from 'src/shared/ui/Layout/menuItems';
import { Route, Routes } from 'react-router-dom';
import { WithAuthenticationState } from '../shared/hocs/withAuthenticationState';
import ThemeProvider from '../shared/providers/ThemeProvider/ThemeProvider';
import { LanguageProvider } from '../shared/providers/LanguageProvider/LanguageProvider';
import AuthProvider from '../shared/providers/AuthProvider/AuthProvider';
import ProductsProvider from '../shared/providers/ProductsProvider/ProductsProvider';
import CartProvider from '../shared/providers/CartProvider/CartProvider';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';
import { getCategories } from '../features/Products/model/thunks';
import { removeTokenFromLocalStorage } from '../shared/lib/localStorage';
import { setupAuthSync } from '../features/Auth/model/sync';

function App() {
  const [menuItems] = useState([...shopMenuItems, ...profileMenuItems, ...adminMenuItems, ...authMenuItems]);
  const [initialized, setInitialization] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    setupAuthSync();
    dispatch(getCategories());
    removeTokenFromLocalStorage();
    setInitialization(true);
  }, []);

  const generateRoutes = (items: typeof menuItems) => {
    return [
      ...items.map((item) => {
        if (item.dropdown) {
          return (
            <React.Fragment key={item.path + item.label}>
              <Route
                path={item.path}
                element={
                  <WithAuthenticationState
                    authenticationState={item.authenticationState}
                    routes={{ root: '/', signIn: '/auth/SignIn' }}
                  >
                    {item.element}
                  </WithAuthenticationState>
                }
              />
              {generateRoutes(item.dropdown)}
            </React.Fragment>
          );
        }
        return (
          <React.Fragment key={item.path + item.label}>
            <Route
              path={item.path}
              element={
                <WithAuthenticationState
                  authenticationState={item.authenticationState}
                  routes={{ root: '/', signIn: '/auth/SignIn' }}
                >
                  {item.element}
                </WithAuthenticationState>
              }
            />
          </React.Fragment>
        );
      }),
      <React.Fragment key={'rootTempElement'}>
        <Route
          path={'/'}
          element={
            <>
              <p>
                Сейчас в виртуальной базе два пользователя. При авторизации под ними происходит синхронизация на разных
                вкладках. При регистрации нового пользователя, он будет доступен только на его вкладке.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  justifySelf: 'center',
                  width: '300px',
                }}
              >
                <span>user1@example.com</span>
                <span>password1</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  justifySelf: 'center',
                  width: '300px',
                }}
              >
                <span>user2@example.com</span>
                <span>password2</span>
              </div>
            </>
          }
        />
      </React.Fragment>,
    ];
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <ProductsProvider>
            <CartProvider>
              <div className={cn(style.App)}>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    {generateRoutes(menuItems)}
                  </Route>
                </Routes>
              </div>
            </CartProvider>
          </ProductsProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
