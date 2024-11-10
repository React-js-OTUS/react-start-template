import React from 'react';

interface AddToCartButtonProps {
  count: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ count }) => {
  return (
    <div className="add-to-cart">
      {count === 0 ? (
        <button className="btn-add-to-cart">В корзину</button>
      ) : (
        <div className="input-group">
          <button className="btn-decrement">-</button>
          <input type="number" className="quantity-input" value={count} readOnly />
          <button className="btn-increment">+</button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
