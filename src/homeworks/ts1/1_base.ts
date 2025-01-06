/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus = (string: string): string => string.replace(/^\+/, '');

export const addPlus = (string: string): string => `+${string}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: number, separator = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

//Пробую через type
type Point = {
  x: number;
  y: number;
};

export const getTransformFromCss = (transformCssString: string): Point => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

//Пробую через interface
interface RgbColor {
  red: number;
  green: number;
  blue: number;
}

export const getColorContrastValue = (color: RgbColor): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((color.red * 299 + color.green * 587 + color.blue * 114) / 1000);

type BlackOrWhite = 'black' | 'white';
export const getContrastType = (contrastValue: number): BlackOrWhite => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string) => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string) => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red = parseInt(color.substring(1, 2), 16);
    const green = parseInt(color.substring(2, 3), 16);
    const blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

type ValueNumber = {
  value: number;
  number: number;
};
export const getNumberedArray = (arr: number[]): ValueNumber[] => arr.map((value, number) => ({ value, number }));
export const toStringArray = (arr: ValueNumber[]): string[] => arr.map(({ value, number }) => `${value}_${number}`);

interface Person {
  name: string;
  age: number;
  isSubscribed: boolean;
}
interface Customer extends Person {
  id: string;
}
export const transformCustomers = (customers: Customer[]): Record<string, Person> => {
  return customers.reduce((acc, customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {} as Record<string, Person>);
};
