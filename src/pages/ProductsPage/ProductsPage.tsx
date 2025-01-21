import React, { FC, useCallback, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ProductList } from 'src/widgets/ProductList';
import { LoadMoreButton } from 'src/shared/LoadMoreButton';
import { useDispatch, useSelector } from 'react-redux';
import { loadMore, selectProducts } from 'src/store/slices/productsSlice';
import { ProductsApi } from 'src/shared/api/product/productsApi';

export const ProductsPage: FC = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    if (isLoading) {
      return;
    }

    fetchData();
  };

  const { ref } = useInView({
    onChange: () => handleLoadMore(),
  });

  const fetchData = useCallback(() => {
    setIsLoading(true);

    ProductsApi.get(page, 20).then((products) => {
      dispatch(loadMore(products));
      setIsLoading(false);
      setPage(page + 1);
    });
  }, [dispatch, page]);

  return (
    <>
      <ProductList products={products} />
      <div ref={ref}>
        <LoadMoreButton label={'Load more'} onClick={handleLoadMore} />
      </div>
    </>
  );
};
