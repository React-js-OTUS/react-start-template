import React, { useState } from 'react';
import './productPreview.css';

interface ProductPreviewProps {
  price: number;
  imageUrl: string;
  name: string;
  description: string;
  onEdit: () => void;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ price, imageUrl, name, description, onEdit }) => {
  const [count, setCount] = useState(0);
  const handleAddToCart = () => setCount(1);
  const handleIncrease = () => setCount((prevCount) => prevCount + 1);
  const handleDecrease = () => setCount((prevCount) => Math.max(prevCount - 1, 0)); // функция принимает два значения и возвращает большее из них

  return (
    <div className="product-preview">
      <img src={imageUrl} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-description">
        {description.length > 100 ? `${description.slice(0, 100)}...` : description}
      </p>
      <p className="product-price">{`₽${price.toFixed(2)}`}</p>

      <button onClick={onEdit} className="edit-button">
        Редактировать
      </button>
    </div>
  );
};

export default ProductPreview;
