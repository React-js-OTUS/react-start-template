import React, { FC } from 'react';
import { ProductList } from 'src/widgets/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'src/store/slices/productsSlice';
import { clearCart, selectCart } from 'src/store/slices/cartSlice';
import { useTranslation } from 'react-i18next';
import { OrdersApi } from 'src/shared/api/orders/ordersApi';

export const CartPage: FC = () => {
  const { t } = useTranslation();
  const allProducts = useSelector(selectProducts);
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  const products = cartItems.map((item) => {
    return allProducts.find((product) => product.id === item.id);
  });

  if (products.length === 0) {
    return <div>{t`pages.CartPage.emptyList`}</div>;
  }

  const handleCreate = async () => {
    try {
      const order = await OrdersApi.create({ products: cartItems });
      dispatch(clearCart());
      alert('Заказ #' + order.id + ' успешно оформлен!');
    } catch (error) {
      let message = null;
      const errors = error.response?.data?.errors || [];

      if (errors.length > 0) {
        message = errors[0]?.message;
      }
      alert(message);
    }

    console.log(cartItems);
  };

  return (
    <>
      <div>
        <button onClick={handleCreate}>Оформить заказ</button>
      </div>
      <ProductList products={products} />
    </>
  );
};
