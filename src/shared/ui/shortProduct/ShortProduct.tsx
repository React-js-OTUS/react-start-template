import React, { memo, useEffect, useState } from 'react';
import { CartButton } from '../cartButton';
import { RootState } from 'src/features/store/store';
import { useSelector } from 'react-redux';
import { Product } from 'src/entities/types/product';
import Modal from '../modals/modal/Modal';
import FormProduct from '../formProduct/FormProduct';

const ShortProduct = memo(function ShortProduct(product: Product) {
  const [visible, setVisible] = useState(false);

  const cartItems = useSelector((s: RootState) => s.rootReducer.cart.items);
  const isAdmin = useSelector((s: RootState) => s.rootReducer.user?.profile?.isAdmin);
  const item = cartItems.find((item) => item.id === product.id);

  const handleEditProduct = () => {
    setVisible(true);
  };
  const handleClosed = () => {
    setVisible(false);
  };

  const modal = (
    <Modal header="Редактировать товар" visible={visible} onClose={handleClosed}>
      <FormProduct product={product} setUnVisible={handleClosed} />
    </Modal>
  );

  return (
    <>
      <div className="card text-center" style={{ width: '10rem' }}>
        <img src={product.photo} className="card-img-top" alt="..." style={{ objectFit: 'contain' }} />
        <div className="card-body">
          <h5 className="card-title">Название: {product.name}</h5>
          <p className="card-subtitle mb-auto">Описание: {product.desc}</p>
          <p className="card-text text-muted">Цена: {product.price}</p>
        </div>
        <div className=" pb-2">
          {isAdmin ? (
            <button className="btn btn-secondary btn-sm" onClick={handleEditProduct}>
              Редактировать
            </button>
          ) : (
            <CartButton id={product.id} quantity={item?.quantity ?? 0} />
          )}
        </div>
      </div>
      {visible && modal}
    </>
  );
});

export default ShortProduct;
