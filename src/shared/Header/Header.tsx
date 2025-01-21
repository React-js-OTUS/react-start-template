import React, { FC } from 'react';
import { Logo } from '../Logo';
import { LangSwitcher } from 'src/features/LangSwitcher';
import { ThemeSwitcher } from 'src/features/ThemeSwitcher';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';
import s from './Header.module.sass';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { routes } from 'src/app/Routing/routes';
import { useSelector } from 'react-redux';
import { selectProfile } from 'src/store/slices/authSlice';

const isActive: NavLinkProps['className'] = ({ isActive }) => cn(s.link, isActive && s.active);

export const Header: FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const profile = useSelector(selectProfile);

  return (
    <header className={s.root}>
      <Logo />
      <div className={s.menu}>
        {routes
          .filter((route) => route.isVisible(profile))
          .map((route) => (
            <NavLink
              key={route.path}
              to={route.url}
              className={isActive}
              state={{ background: route.isModal ? location : null }}
            >
              {t(route.title)}
            </NavLink>
          ))}
      </div>
      <div>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
