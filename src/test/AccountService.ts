export class AccountService {
  private userDiscounts: Record<string, number> = {};
  private productDiscounts: Record<string, Record<string, number>> = {};

  setUserDiscount(userType: string, discount: number): void {
    if (discount < 0) {
      throw new Error('Скидка не может быть отрицательной');
    }
    this.userDiscounts[userType] = discount;
  }

  setProductDiscount(userType: string, productType: string, discount: number): void {
    if (discount < 0) {
      throw new Error('Скидка не может быть отрицательной');
    }
    if (!this.productDiscounts[userType]) {
      this.productDiscounts[userType] = {};
    }
    this.productDiscounts[userType][productType] = discount;
  }

  getDiscount(userType: string, productType: string): number {
    const userDiscount = this.userDiscounts[userType] || 0;
    const productDiscount = this.productDiscounts[userType]?.[productType] || 0;
    return userDiscount + productDiscount;
  }
}
