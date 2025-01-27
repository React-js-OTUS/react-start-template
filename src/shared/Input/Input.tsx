import React from 'react';
import clsx from 'clsx';
import { IInput } from './interfaces';
import { EThemeVariables, StoreContext } from '../../app/StoreContext';

export const Input: React.FC<IInput> = ({
  value,
  name,
  placeholder,
  required,
  id,
  form,
  disabled,
  changeInputValue,
}) => {
  const [currentValue, setCurrentValue] = React.useState<string>('');

  const { theme } = React.useContext(StoreContext);
  const isDarkTheme = theme === EThemeVariables.DARK;

  const className = clsx(
    'w-full p-2 border-[1px] border-solid active:outline focus:outline rounded',
    isDarkTheme
      ? 'bg-b-900 border-b-100 active:outline-w-900 focus:outline-w-900'
      : 'bg-w-900 active:outline-b-900 border-b-200 focus:outline-b-900'
  );

  React.useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const changeValue = (newValue: string): void => {
    setCurrentValue(newValue);
    changeInputValue(newValue);
  };

  return (
    <input
      className={className}
      placeholder={placeholder}
      value={currentValue}
      name={name}
      required={required}
      id={id}
      form={form}
      disabled={disabled}
      onChange={(ev) => changeValue(ev.target.value)}
    />
  );
};
