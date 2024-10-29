/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * 
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 * 
 * */
interface Category {
    id: string, 
    name: string, 
    photo?: string
};
 /**
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - createdAt (строка)
 * - price (число)
 * - category (Категория)
 * - desc (строка, необязательно)
 * - oldPrice (число, необязательно)
 * */
 interface Product {
    id: string, 
    name: string, 
    photo: string, 
    createdAt: string, 
    price: number, 
    category: Category, 
    desc?: string, 
    oldPrice?: string
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
 **/
interface Cost {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Cost';
  }
/**
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
interface Profit {
    id: string;
    name: string;
    desc?: string;       
    createdAt: string;
    amount: number;
    category: Category;     
    type: 'Profit';      
  }
/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
const getRandomProductName = (): string => {
    const productNames = [
        'iPhone 14',
        'Samsung Galaxy S23',
        'Google Pixel 7',
        'OnePlus 11',
        'Xiaomi 13',
        'Sony Xperia 1 IV',
        'Oppo Find X5',
        'Huawei P50 Pro',
        'Motorola Edge 30',
        'Nokia G50',
    ];
    const randomIndex = getRandomInt(0, productNames.length - 1);
    return productNames[randomIndex];
  };

export const createRandomProduct = (createdAt: string): Product => {
    const randomId = getRandomInt(1, 99).toString();
    const randomPrice = getRandomInt(5000, 120000);
    const randomOldPrice = (randomPrice + getRandomInt(1000, 5000)).toString();
    const phone_name = getRandomProductName();

    return {
        id: randomId,                           
        name: phone_name,              
        photo: 'https://cdn1.ozone.ru/s3/multimedia-1-k/7054212764.jpg',
        createdAt: createdAt,               
        price: randomPrice,                        
        category: {
            id: '3',
            name: 'Олдскул',         
        },
        desc: `Мобильный телефон ${phone_name} цена всего ${randomPrice} руб`,   
        oldPrice: randomOldPrice,  
    }
};

// const randomProduct = createRandomProduct('2024-10-04');
// console.log(randomProduct);

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string) : (Cost | Profit) => {

    const randomId = getRandomInt(1, 99).toString();
    const isCost = Math.random() < 0.5;

    return {
        id: randomId,
        name: `Операция номер: ${randomId}`,
        desc: isCost ? 'Описание траты' : 'Описание дохода',
        createdAt: createdAt, 
        amount: getRandomInt(100, 1000), 
        category: {
            id: '2',
            name: isCost ? 'Траты' : 'Доход',         
        },
        type: isCost ? 'Cost' : 'Profit', 
    };

};