/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

class Category {
  constructor(public id: string, public name: string, public photo?: string) {}
}

class Product {
  constructor(
    public id: string,
    public name: string,
    public photo: string,
    public price: number,
    public createdAt: string,
    public category: Category,
    public desc?: string,
    public oldPrice?: number
  ) {}
}

class Cost {
  constructor(
    public id: string,
    public name: string,
    public amount: number,
    public category: Category,
    public createdAt: string,
    public type: 'Cost',
    public desc?: string,
  ) {
  }
}

class Profit {
  constructor(
    public id: string,
    public name: string,
    public amount: number,
    public category: Category,
    public createdAt: string,
    public type: 'Profit',
    public desc?: string,
  ) {
  }
}


type Operation = Cost | Profit;
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

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

export const createRandomProduct = (createdAt: string): Product => {
  return new Product(
    new Date().toISOString(),
    'Product',
    'https://cs5.pikabu.ru/post_img/big/2015/06/04/11/1433446202_1725992411.jpg',
    100,
    createdAt,
    new Category(new Date().toISOString(), 'Category')
  );
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const randomNumber = Math.floor(+Math.random().toFixed(2));
  if (randomNumber > 0.48) {
    return new Cost(
      new Date().toISOString(),
      'CostName',
      100,
      new Category(new Date().toISOString(), 'Category'),
      createdAt,
      'Cost'
    );
  } else {
    return new Profit(
      new Date().toISOString(),
      'ProfitName',
      100,
      new Category(new Date().toISOString(), 'Category'),
      createdAt,
      'Profit'
    );
  }
};
