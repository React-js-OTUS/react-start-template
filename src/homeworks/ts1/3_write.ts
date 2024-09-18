/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

export type Category = {
  id: string;
  name: string;
  photo?: string;
};

export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

export type Operation = Cost | Profit;

export type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

export type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

const getRandomNumber = (num = 100): number => {
  return Math.floor(Math.random() * num) + 1;
};

const getRandomDesc = (): string => {
  const descriptions: string[] = [
    'Элегантный и мощный ноутбук с процессором Intel i7, 16 ГБ ОЗУ и SSD на 512 ГБ, идеален для работы и развлечений.',
    'Компактные беспроводные наушники с шумоподавлением и длительным временем работы от аккумулятора.',
    'Ультратонкий смартфон с камерой на 48 МП и экраном AMOLED для ярких и четких изображений.',
    'Стильные очки с защитой от синего света, идеально подходят для работы за компьютером и защиты глаз.',
    'Робот-пылесос с функцией влажной уборки и интеллектуальным управлением для легкости уборки.',
    'Энергоэффективный холодильник с функцией No Frost и просторным морозильником для долгосрочного хранения продуктов.',
    'Современный умный браслет с функциями мониторинга здоровья и фитнеса, водостойкий и с длительным временем работы.',
    'Электрическая зубная щетка с ультразвуковой технологией и несколькими режимами чистки для эффективного ухода за зубами.',
    'Качественный и удобный рюкзак для ноутбука с множеством карманов и водоотталкивающей поверхностью.',
    'Кофеварка с капсульной системой и функцией автоотключения, проста в использовании и идеально подходит для быстрого приготовления кофе.',
  ];

  return descriptions[getRandomNumber(descriptions.length - 1)];
};

const getRandomCategory = (): Category => {
  const categoryNames = ['Игрушки', 'Техника', 'Лекарство'];

  const randomCategory = categoryNames[getRandomNumber(categoryNames.length - 1)];

  const category = {
    id: getRandomNumber().toString(),
    name: randomCategory,
  };

  return category;
};

const getRandomNameProduct = (): string => {
  const products = [
    'Плюшевый медведь',
    'Антистрессовый сквиш в форме пончика',
    'Конструктор LEGO City',
    'Парацетамол 500 мг',
    'Крем от ушибов с арникой',
    'Сироп от кашля с мёдом и лимоном',
    'Электронный термометр',
    'Умные часы',
    'Робот-пылесос',
    'Беспроводные наушники',
  ];

  return products[getRandomNumber(products.length) - 1];
};

export const createRandomProduct = (createdAt: string): Product => {
  const id = getRandomNumber().toString();
  const price = getRandomNumber(10000);
  const oldPrice = getRandomNumber(10000);
  const Product = {
    id: id,
    name: getRandomNameProduct(),
    desc: getRandomDesc(),
    photo: `/src/assets/photo${getRandomNumber(100)}.png`,
    createdAt: createdAt,
    oldPrice: oldPrice,
    price: price,
    category: getRandomCategory(),
  };
  return Product;
};
/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const id = getRandomNumber().toString();
  const amount = getRandomNumber(10000);

  const randomType = () => {
    const types = ['Profit', 'Cost'] as const;
    return types[getRandomNumber(types.length) - 1];
  };

  const type = randomType();

  if (type === 'Profit') {
    return {
      id,
      name: getRandomNameProduct(),
      desc: getRandomDesc(),
      createdAt,
      amount,
      category: getRandomCategory(),
      type: 'Profit',
    } as Profit;
  } else {
    return {
      id,
      name: getRandomNameProduct(),
      desc: getRandomDesc(),
      createdAt,
      amount,
      category: getRandomCategory(),
      type: 'Cost',
    } as Cost;
  }
};
