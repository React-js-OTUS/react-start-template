import React from 'react';
import CartItem from './CartItem';
import './cart.css';

interface CartProps {
  items: Array<{
    id: string;
    imageUrl: string;
    description: string;
    price: number;
  }>;
  discount: number; // Скидка в процентах
  onRemove: (id: string) => void; // Функция для удаления товара
}

const Cart: React.FC<CartProps> = ({ items, discount, onRemove }) => {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const discountedPrice = totalPrice - (totalPrice * discount) / 100;

  return (
    <div className="cart">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem
            key={item.id}
            imageUrl={item.imageUrl}
            description={item.description}
            price={item.price}
            onRemove={() => onRemove(item.id)}
          />
        ))}
      </div>
      <div className="cart-summary">
        <h2>Итоги</h2>
        <p>Количество товаров: {items.length}</p>
        <p>Скидка: {discount}%</p>
        <p>Цена всего: {totalPrice}₽</p>
        <p>Итоговая цена: {discountedPrice.toFixed(2)}₽</p>
      </div>
    </div>
  );
};

export default Cart;
