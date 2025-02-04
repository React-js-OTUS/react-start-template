import React, { useState } from 'react';
import { ListProduct } from 'src/shared/ui/listProduct';
import { useInView } from 'react-intersection-observer';
import { useGetProductsQuery } from 'src/services/api/productApi.slice';

export const ProductPage = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data: response, isFetching } = useGetProductsQuery(page);

  const { ref } = useInView({ threshold: 1, onChange: () => handleLoadMoreProducts() });

  const handleLoadMoreProducts = async () => {
    if (Math.round(response?.pagination.total / 30) > page) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="row row-cols-1 gap-3 justify-content-center">
      {response?.data && <ListProduct products={response?.data} />}
      <span ref={ref}>{isFetching && <span>Loading...</span>}</span>
    </div>
  );
};
