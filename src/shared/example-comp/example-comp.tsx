import React from 'react';
import './example-comp.scss';
import { useThemeContext } from '../context/theme-context/theme-context';
import classNames from 'classnames';

export const ExampleCpomp = () => {
  const { theme, toggleTheme } = useThemeContext();

  const containerClass = classNames('container', {
    dark: theme === 'dark',
    light: theme === 'light',
  });

  return (
    <div className={classNames(containerClass)}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias impedit delectus esse voluptatibus
        perspiciatis architecto atque, vel ullam. Dolorem ea voluptates magnam qui non tempore nulla, a obcaecati?
        Quibusdam, deserunt.
      </p>
      <button onClick={toggleTheme}>сменить тему</button>
    </div>
  );
};
