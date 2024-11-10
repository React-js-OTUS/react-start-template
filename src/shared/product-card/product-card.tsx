import React from 'react';

import './product-card.css';

interface ProductCardProps {
  price: number;
  imageUrl: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ price, imageUrl, title, description }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">
        {description.length > 100 ? `${description.slice(0, 100)}...` : description}
      </p>
      <div className="product-price">Цена: {price} ₽</div>
      <button className="btn-add-to-cart" disabled>
        В корзину
      </button>
    </div>
  );
};

export default ProductCard;
