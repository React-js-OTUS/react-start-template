/**
 * Здесь код с ошибками типов. Нужно их устранить
 * */

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export const getFakeApi = async (): Promise<void> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
  console.log(result);
};

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export class SomeClass {
  private set: Set<number>;
  private channel: BroadcastChannel;
  constructor() {
    this.set = new Set([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

export type Data = DataMoney | DataPercent;

type DataMoney = {
  type: 'Money';
  value: Money;
};

type DataPercent = {
  type: 'Percent';
  value: Percent;
};

export type DataValue = Money | Percent;

export type Money = {
  currency: string;
  amount: number;
};

export type Percent = {
  percent: number;
};

const getDataAmount = (data: Data): number => {
  switch (data.type) {
    case 'Money':
      return data.value.amount;
    case 'Percent':
      return data.value.percent;
    default: {
      // Здесь TypeScript должен понимать, что этот код не должен быть достигнут
      const unhandled: never = data; // :never должен остаться
      throw new Error(`unknown type: ${data}`);
    }
  }
};
