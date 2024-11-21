import { AccountService } from './AccountService';

const mockUsers = {
  Standard: { discount: 5 },
  Premium: { discount: 10 },
  Gold: { discount: 15 },
  Free: { discount: 0 },
};

const mockProducts = ['Car', 'Toy', 'Food'];

describe('AccountService', () => {
  let accountService: AccountService;

  beforeEach(() => {
    accountService = new AccountService();
  });

  describe('Позитивный сценарий', () => {
    it('следует применять пользовательскую скидку ко всем товарам', () => {
      accountService.setUserDiscount('Premium', mockUsers.Premium.discount);
      const discount = accountService.getDiscount('Premium', mockProducts[0]); // Car
      expect(discount).toBe(10);
    });

    it('следует применять определенную скидку на продукт для определенного типа пользователей', () => {
      accountService.setUserDiscount('Gold', mockUsers.Gold.discount);
      accountService.setProductDiscount('Gold', 'Toy', 15);
      const discount = accountService.getDiscount('Gold', 'Toy');
      expect(discount).toBe(30); // User discount (15) + Product discount (15)
    });

    it('не следует применять скидку для конкретного продукта, если она не установлена', () => {
      accountService.setUserDiscount('Standard', mockUsers.Standard.discount);
      const discount = accountService.getDiscount('Standard', 'Food');
      expect(discount).toBe(5); // Only user discount applies
    });

    it('следует правильно использовать скидки на несколько товаров', () => {
      accountService.setUserDiscount('Gold', mockUsers.Gold.discount);
      accountService.setProductDiscount('Gold', 'Car', 10);
      accountService.setProductDiscount('Gold', 'Food', 5);
      expect(accountService.getDiscount('Gold', 'Car')).toBe(25); // 15 + 10
      expect(accountService.getDiscount('Gold', 'Food')).toBe(20); // 15 + 5
    });
  });

  describe('Негативный сценарий', () => {
    it('должен возвращать скидку 0 для незарегистрированных типов пользователей', () => {
      const discount = accountService.getDiscount('NonExistentUser', 'Car');
      expect(discount).toBe(0);
    });

    it('следует вернуть скидку в размере 0 на незарегистрированные виды товаров', () => {
      accountService.setUserDiscount('Premium', mockUsers.Premium.discount);
      const discount = accountService.getDiscount('Premium', 'NonExistentProduct');
      expect(discount).toBe(10); // Only user discount applies
    });

    it('должно выдаваться сообщение об ошибке, если для пользователя установлена отрицательная скидка', () => {
      expect(() => accountService.setUserDiscount('Premium', -5)).toThrow('Скидка не может быть отрицательной');
    });

    it('должно выдаваться сообщение об ошибке, если для товара установлена отрицательная скидка', () => {
      expect(() => accountService.setProductDiscount('Premium', 'Car', -10)).toThrow(
        'Скидка не может быть отрицательной'
      );
    });

    it('следует корректно обращаться с неопределенными скидками', () => {
      const discount = accountService.getDiscount(undefined as any, 'Car');
      expect(discount).toBe(0);
    });
  });
});
