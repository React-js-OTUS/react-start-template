import { v4 as uuidv4 } from 'uuid';

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
 * */

type Category = {
  id: string;
  name: string;
  photo?: string;
}

/**
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 * */

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

/**
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

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

type Operation = Cost | Profit;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

const productPrefixes = ['Super', 'Ultra', 'Eco', 'Mega', 'Power', 'Pro', 'Smart'];
const productTypes = ['Phone', 'Laptop', 'Headphones', 'Tablet', 'Monitor', 'Camera', 'Speaker'];
const productBrands = ['TechCo', 'ElectroMax', 'Gadgetron', 'FutureCorp', 'DeviceX'];

const operationNames = ['Purchase', 'Subscription', 'Investment', 'Refund', 'Sale', 'Commission'];

const createRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const createRandomDate = (from: Date, to = new Date()): string =>
  new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime())).toISOString();

const createRandomProductName = (): string => {
  const productPrefix = productPrefixes[Math.floor(Math.random() * productPrefixes.length)];
  const productType = productTypes[Math.floor(Math.random() * productTypes.length)];
  const productBrand = productBrands[Math.floor(Math.random() * productBrands.length)];
  return `${productPrefix} ${productType} by ${productBrand}`;
};

const createRandomCategory = (): Category => ({
  id: uuidv4(),
  name: `Category ${createRandomProductName()}`,
  photo: 'https://picsum.photos/200/100',
});

export const createRandomProduct = (createdAt: string): Product => {
  const productName = createRandomProductName();
  return {
    id: uuidv4(),
    name: createRandomProductName(),
    photo: 'https://picsum.photos/200/300',
    desc: `This is our newest ${productName}`,
    createdAt: createdAt ?? createRandomDate(new Date(2020, 0, 1)),
    oldPrice: createRandomNumber(10, 100),
    price: createRandomNumber(10, 100),
    category: createRandomCategory(),
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const operationName = operationNames[Math.floor(Math.random() * operationNames.length)];
  return {
    id: uuidv4(),
    name: operationName,
    desc: `${operationName} authorized by you`,
    createdAt: createdAt ?? createRandomDate(new Date(2020, 0, 1)),
    amount: createRandomNumber(10, 100),
    category: createRandomCategory(),
    type: Math.random() > 0.5 ? 'Cost' : 'Profit',
  };
};
