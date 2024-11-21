import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from 'src/pages/notFound/NotFound';
import { paths } from './paths.data';

import { useAuth } from '../shared/hooks/AuthContext';

export const Paths = () => {
  const isAuth = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {paths.map((path) => {
          if (path.isAuth && !isAuth) {
            return false;
          }
          return <Route key={path.path} path={path.path} element={<path.component />} />;
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
