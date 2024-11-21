import React, { useState } from 'react';

interface ProductFormProps {
  onSave: (product: { name: string; price: number; imageUrl: string; description: string }) => void;
  initialValues?: { name: string; price: number; imageUrl: string; description: string };
}

const ProductForm: React.FC<ProductFormProps> = ({ onSave, initialValues }) => {
  const [name, setName] = useState(initialValues?.name || '');
  const [price, setPrice] = useState(initialValues?.price || 0);
  const [imageUrl, setImageUrl] = useState(initialValues?.imageUrl || '');
  const [description, setDescription] = useState(initialValues?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, price, imageUrl, description });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <label>
          Название:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите название"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Цена:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Введите цену"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Фото URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Введите ссылку на фото"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Описание:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Введите описание"
            required
          />
        </label>
      </div>
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default ProductForm;
