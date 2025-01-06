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
interface Category {
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
interface Product {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
}

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
enum OperationTypes {
  Cost = 'Расход',
  Profit = 'Доход',
}
interface Operation {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: OperationTypes;
}
/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const oldPrice = Math.floor(Math.random() * 1000000) / 100;
  const category = generateCategory();
  const brand = getRandomElement(brands);
  return {
    id: generateId(),
    name: category.name + ' ' + brand,
    photo: '_' + category.name + '_' + brand + '.jpg',
    desc: 'Описание для продукта ' + category.name + ' ' + brand,
    createdAt: createdAt,
    oldPrice: oldPrice,
    price: oldPrice * 0.9,
    category: category,
  };
};

const generateId = (): string => 'id_' + Math.floor(Math.random() * 10000);

const generateCategory = (): Category => {
  const cat = getRandomElement(categories);
  return {
    id: generateId(),
    name: cat,
    photo: '_' + cat + '.png',
  };
};

const categories = ['Компьютер', 'Ноутбуки', 'Планшет', 'Принтер', 'Cканер', 'Телефон'];
const brands = ['Canon', 'D-Link', 'Samsung', 'Epson', 'Xerox', 'Toshiba', 'HP', 'Apple', 'Intel'];
const getRandomElement = (arr: string[]): string => arr[Math.floor(Math.random() * arr.length)];

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const amount = Math.floor(Math.random() * 1000000) / 100;
  const category = generateCategory();
  const type = getRandomOperationType();
  return {
    id: generateId(),
    name: 'Операция ' + type + 'а по категории ' + category.name,
    desc: 'Произведена операция ' + type + 'а по категории ' + category.name + ' на сумму ' + amount,
    createdAt: createdAt,
    amount: amount,
    category: category,
    type: type,
  };
};

const getRandomOperationType = (): OperationTypes => {
  const index = Math.floor(Math.random() * Object.keys(OperationTypes).length);
  switch (index) {
    case 0:
      return OperationTypes.Cost;
    case 1:
      return OperationTypes.Profit;
    default:
      new Error(`unknown index: ${index}`);
  }
};
