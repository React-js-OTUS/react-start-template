type Category = {
  id: string;
  name: string;
  photo?: string;
};

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

type BaseOperation = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
};

type Cost = BaseOperation & {
  type: 'Cost';
};

type Profit = BaseOperation & {
  type: 'Profit';
};

type Operation = Cost | Profit;

const getRandomItem = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

const ids = ['prod_001', 'prod_002', 'prod_003', 'prod_004'];
const names = ['Laptop', 'T-Shirt', 'Novel', 'Blender'];
const photos = ['laptop.jpg', 'tshirt.jpg', 'novel.jpg', 'blender.jpg'];
const descriptions = [
  'A high-end laptop.',
  'A comfortable cotton t-shirt.',
  'A bestselling novel.',
  'A powerful kitchen blender.',
];
const prices = [299.99, 19.99, 9.99, 49.99];
const oldPrices = [399.99, 24.99, 14.99, 59.99];
const categories: Category[] = [
  {
    id: 'cat_001',
    name: 'Electronics',
    photo: 'cat_001_photo.jpg',
  },
  {
    id: 'cat_002',
    name: 'Clothing',
    photo: 'cat_002_photo.jpg',
  },
  {
    id: 'cat_003',
    name: 'Electronics',
    photo: 'cat_003_photo.jpg',
  },
  {
    id: 'cat_004',
    name: 'Books',
    photo: undefined,
  },
];

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  return {
    id: getRandomItem(ids),
    name: getRandomItem(names),
    photo: getRandomItem(photos),
    desc: Math.random() > 0.5 ? getRandomItem(descriptions) : undefined,
    createdAt: createdAt,
    oldPrice: Math.random() > 0.5 ? getRandomItem(oldPrices) : undefined,
    price: getRandomItem(prices),
    category: getRandomItem(categories),
  };
};

const operationIds = ['op_001', 'op_002', 'op_003', 'op_004'];
const operationNames = ['Rent Payment', 'Salary Payment', 'Grocery Shopping', 'Freelance Project'];
const operationDescriptions = ['Monthly rent', 'Monthly salary', 'Buying groceries', 'Completed a freelance project'];
const operationAmounts = [50, 100, 500, 1000, 2000];

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  return {
    id: getRandomItem(operationIds),
    name: getRandomItem(operationNames),
    desc: Math.random() > 0.5 ? getRandomItem(operationDescriptions) : undefined,
    createdAt,
    amount: getRandomItem(operationAmounts),
    category: getRandomItem(categories),
    type: Math.random() > 0.5 ? 'Cost' : 'Profit',
  } as Operation;
};
