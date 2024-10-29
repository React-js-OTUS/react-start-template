/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus = (string: string) : string => string.replace(/^\+/, '');

export const addPlus = (string: string) : string => `+${string}`;

export const removeFirstZeros = (value: string) : string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

//тип any так как может быть и число и строка. Чисто приведем к строке используя toString()
export const getBeautifulNumber = (value: (string | number), separator = ' ') : string | number =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2) : number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

interface Result {
  x: number;
  y: number;
}

export const getTransformFromCss = (transformCssString: string) : Result => {
  const data = transformCssString.match(transformRegexp);  //Метод str.match(regexp) ищет совпадения с regexp в строке str
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

export const getColorContrastValue = ([red, green, blue]: [number, number, number]): number =>
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

export const getContrastType = (contrastValue: number) : string => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string) : void => {  //never ставится с ошибкой "A function returning 'never' cannot have a reachable end point"
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) 
    throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string) :[number, number, number] => {
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

export const getNumberedArray = (arr: (string | number)[]) : object => arr.map((value, number) => ({ value, number }));
export const toStringArray = <T extends { value: string | number; number: string | number }>(arr: T[]) : string[] => arr.map(({ value, number }) => `${value}_${number}`);

interface Customer {
  id: string | number;
  name: string;
  age: number;
  isSubscribed: boolean;
}

interface CustomerData {
  name: string;
  age: number;
  isSubscribed: boolean;
}

export const transformCustomers = (customers: Customer[]): Record<string | number, CustomerData> => { //нужно ли (можно ли?) делать не просто object, а object[]
  return customers.reduce((acc, customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {} as Record<string | number, CustomerData>);
};
