import React, { useState } from 'react';
import ProductPreview from '../../components/productPreview/ProductPreview';
import { Modal } from '../../components/modal/Modal';
import ProductForm from '../../components/forms/ProductForm';
import './products.css';
import { sneakers } from '../../shared/sneakers';
import { Button } from 'src/shared/ui/button/Button';

export const Products: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Начальное количество товаров
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any | null>(null);

  // Обработчик для показа модального окна редактирования
  const handleOpenEditModal = (product: any) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  // Обработчик для сохранения изменений продукта
  const handleSaveProduct = (updatedProduct: any) => {
    console.log('Сохранен продукт:', updatedProduct);
    handleCloseModal();
  };

  // Увеличить видимые товары
  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Увеличиваем количество видимых товаров
  };

  return (
    <div>
      <h1>Кроссовки</h1>
      <div className="product-preview-container">
        {sneakers.slice(0, visibleCount).map((sneaker, index) => (
          <ProductPreview
            key={index}
            price={sneaker.price}
            imageUrl={sneaker.imageUrl}
            name={sneaker.name}
            description={sneaker.description}
            onEdit={() => handleOpenEditModal(sneaker)}
          />
        ))}
      </div>
      {visibleCount < sneakers.length && ( // Показываем кнопку только если есть скрытые товары
        <div className="btn-center">
          <Button label="Показать еще" onClick={showMore} />
        </div>
      )}

      {isModalOpen && (
        <Modal visible={isModalOpen} onClose={handleCloseModal}>
          <ProductForm initialValues={editingProduct} onSave={handleSaveProduct} />
        </Modal>
      )}
    </div>
  );
};
