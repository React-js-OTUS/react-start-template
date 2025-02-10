import React from 'react';

export enum EThemeVariables {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum ELangVariables {
  RU = 'ru',
  EN = 'en',
}

export interface IStoreContext {
  theme: EThemeVariables;
  lang: ELangVariables;
}

export interface IStoreContextProps extends IStoreContext {
  themeSwitchHandler: () => void;
  langSwitchHandler: () => void;
}

export const defaultContext: IStoreContext = {
  theme: EThemeVariables.LIGHT,
  lang: ELangVariables.EN,
};

export const StoreContext = React.createContext<IStoreContextProps>({
  ...defaultContext,
  themeSwitchHandler: () => null,
  langSwitchHandler: () => null,
});
