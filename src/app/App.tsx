import React, { useCallback, useEffect, useRef, useState,useLayoutEffect }  from 'react';
import logo from './logo.svg';
import Styles from './App.css';
import {ThemeContext,ThemeProvider,Theme} from "./components/theme-provider/theme.provider";
import {LangContext,LangProvider,Lang} from "./components/lang-provider /lang.provider";
import {ButtonGroup} from "./components/theme-toggler/group-buttons"
import { useContext } from "react";
import { useTranslation } from 'react-i18next';;
 
function App() {
   const themeFromC = useContext(ThemeContext);
   const [theme, setTheme] = useState<Theme>(themeFromC.themeName ) ;
   const  langFromC = useContext(LangContext);
   const [lang, setLang] = useState<Lang>(langFromC.langName ) ;
   const { t } = useTranslation('translation', { lng: lang });

   const getThemeName = (event:React.MouseEvent<HTMLButtonElement>) => {
    debugger;
    let v = event.target as HTMLButtonElement;   
    console.log(v.name);
    setTheme(v.name as Theme);
  };
  const getLangName = (event:React.MouseEvent<HTMLButtonElement>) => {
    debugger;
    let v = event.target as HTMLButtonElement;   
    console.log(v.name);
    setLang(v.name as Lang);
  };


  return (
  <LangProvider langName={lang} children = {
      <div className={Styles.App}>
        <ThemeProvider themeName={theme} children = {
        <header className={Styles.Appheader}>
          <div className={Styles.buttonGroup}>
            <ButtonGroup  buttons={["light","dark"]} doSomethingAfterClick={getThemeName}/>
          </div>
          <div className={Styles.buttonGroup}>
           <ButtonGroup  buttons={["en","ru"]} doSomethingAfterClick={getLangName}/>
          </div>
          <img src={logo} className={Styles.App_logo} alt="logo" />
          <p>{t('title')}
          <ul>
          <li>{t('description.part1')}</li>
          <li>{t('description.part2')}</li>
          <li>{t('description.part3')}</li>
          <li>{t('description.part4')}</li>
          </ul>
          </p>
        </header>
        } />
      </div>}/>
  );
}

export default App;
