/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */
type Category = {
    id : string,
    name : string,
    photo? : string
}

type Product = {
    id : string, 
    name : string,
    photo : string,
    desc? : string,
    createdAt : string,
    oldPrice? :  number,
    price : number,
    category : Category
}

type Operation = 'Cost' | 'Profit'

type Cost = {
    id : string,
    name : string,
    desc? : string,
    createdAt : string,
    amount : number,
    category : Category,
    type : 'Cost'
}

type Profit = {
    id : string,
    name : string,
    desc? : string,
    createdAt : string,
    amount : number,
    category : Category,
    type : 'Profit'
}


function choseRandomly (arr : Array<string>) : string {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}
function choseRandomlyOperation (arr : Array<string>) : any {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}
const { v4: uuidv4 } = require('uuid');
const randomCategoryNames : Array<string> = ['Phone', 'TV', 'Toaster', 'Car', 'PC']
const randomCategoryPhoto : Array<string> = ['Phone Photo', 'TV Photo', 'Toaster Photo', 'Car Photo', 'PC Photo']
const someCategory : Category = {
    id : uuidv4(),
    name : choseRandomly(randomCategoryNames),
    photo : choseRandomly(randomCategoryPhoto)
}
const randomCostNames : Array<string> = ['I', 'Dont', 'Know', 'How', 'To', 'Name', 'Cost', 'Wtf']
const costName = choseRandomly(randomCostNames)

const randomCostDesc : Array<string> = ['I', 'Dont', 'Know', 'Wtf', 'Is', 'Desc']
const costDesc : string = choseRandomly(randomCostDesc)




export const createRandomProduct = (createdAt: string) : Product => {

    const id : string = uuidv4();

    const randomNames : Array<string> = ['Iphone', 'Samsung', 'Xiaomi', 'Bork', 'Google']
    const name : string = choseRandomly(randomNames)

    const randomPhotos : Array<string> = ['Iphone Photo', 'Samsung Photo', 'Xiaomi Photo', 'Bark Photo', 'Google Photo']
    const photo : string = choseRandomly(randomPhotos)

    const randomDesc : Array<string> = ['I', 'Dont', 'Know', 'Wtf', 'Is', 'Desc']
    const desc : string = choseRandomly(randomDesc)

    const oldPrice : number = Math.floor(Math.random() * (1000 - 100  + 1)) + 100;

    const price : number = Math.floor(Math.random() * (1000 - 400  + 1)) + 400;


    const someProduct : Product = {
        id : id,
        name : name,
        photo : photo,
        desc : desc,
        createdAt: createdAt,
        oldPrice : oldPrice,
        price : price,
        category : someCategory
    }

    return someProduct
};

export const createRandomOperation = (createdAt: string) : Operation => {
    const operationTypes : Array<string> = ['Cost', 'Profit']
    const operation : Operation = choseRandomlyOperation(operationTypes)
    if (operation === 'Cost') {
        const operation = 'Cost'
    }
    else {
        const operation = 'Profit'
    }
    return operation
};

const someCost : Cost = {
    id : uuidv4(),
    name : costName,
    desc : costDesc,
    createdAt : '2024-09-29',
    amount : Math.floor(Math.random() * (1000 - 100  + 1)) + 100,
    category : someCategory,
    type : 'Cost'
}

const someProfit : Profit = {
    id : uuidv4(),
    name : costName,
    desc : costDesc,
    createdAt : '2024-09-29',
    amount : Math.floor(Math.random() * (1000 - 100  + 1)) + 100,
    category : someCategory,
    type : 'Profit'
}



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


/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */

