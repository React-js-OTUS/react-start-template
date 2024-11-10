import React from 'react';
import './operation-detail.css';

interface OperationDetailProps {
  price: number;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
}

const OperationDetail: React.FC<OperationDetailProps> = ({ price, imageUrl, category, title, description }) => {
  return (
    <div className="operation-detail">
      <img src={imageUrl} alt={title} className="operation-image" />
      <h2 className="operation-title">{title}</h2>
      <h3 className="operation-category">{category}</h3>
      <p className="operation-description">{description}</p>
      <div className="operation-price">Цена: {price} ₽</div>
      <button className="btn-add-to-cart" disabled>
        В корзину
      </button>
    </div>
  );
};

export default OperationDetail;
