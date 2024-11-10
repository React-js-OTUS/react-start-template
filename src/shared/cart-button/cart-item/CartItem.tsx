import React from 'react';

import './CartItem.css';

interface CartItemProps {
  title: string;
  price: number;
  imageUrl: string;
  onRemove: () => void; // Функция для удаления товара
}

const CartItem: React.FC<CartItemProps> = ({ title, price, imageUrl, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{title}</h3>
        <p className="cart-item-price">Цена: {price} ₽</p>
      </div>
      <button className="btn-remove" onClick={onRemove}>
        Удалить
      </button>
    </div>
  );
};

export default CartItem;
