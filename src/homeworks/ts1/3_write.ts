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
}

export type Product = {
    id: string;
    name: string;
    photo?: string;
    desc?: string;
    createdAt: string;
    oldPrice?: number;
    price: number;
    category: Category;
}

export type Operation = Cost | Profit;


export type Cost = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Cost';
}

export type Profit = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Profit';
}


export const createRandomProduct = (createdAt: string): Product => {
    const category = createRandomCategory();
  
    const productId: number = Math.floor(Math.random() * 1000);

    const product: Product = {
      id: productId.toString(),
      name: `Продукт №${productId}`,
      photo: `Фото Продукта №${productId}`,
      desc: `Описание Продукта №${productId}`,
      createdAt: createdAt,
      oldPrice: Math.random() * 1000,
      price: Math.random() * 1000,
      category: category
    };

    return product;
  };
  
  /**
   * Создает случайную операцию (Operation).
   * Принимает дату создания (строка)
   * */
  export const createRandomOperation = (createdAt: string): Operation => {
    const category = createRandomCategory();
  
    const operationId: number = Math.floor(Math.random() * 1000);

    const operationType: 'Profit' | 'Cost' = Math.random() > 0.5 ? 'Profit' : 'Cost';

    const operation: Operation = {
      id: operationId.toString(),
      name: `Операция №${operationId}`,
      desc: `Описание Операции ${operationType} №${operationId}`,
      createdAt: createdAt,
      amount: Math.floor(Math.random() * 100),
      category: category,
      type: operationType
    };

    return operation;
  };
  
  /**
   * Создает случайную категорию (Category).
   * Без входных параметров
   * */
  const createRandomCategory = (): Category => {
    const categoryId: number = Math.floor(Math.random() * 1000);

    const category: Category = {
      id: categoryId.toString(),
      name: `Категория №${categoryId}`,
      photo: `Фото для Категории №${categoryId}`
    };
    
    return category;
  }
