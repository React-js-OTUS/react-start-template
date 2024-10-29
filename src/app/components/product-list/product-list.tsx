import React, { useCallback, useEffect, useRef, useState } from "react";
import Styles from './products.list.module.css';
import { OperationShop } from '../operation.shop.short/operation-shop-short';
import { Product,CreateRandomProduct } from "src/homeworks/ts1/3_write";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [next, setNext] = useState(1);
  const [loading, setLoading] = useState(false);
  //const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const loadMoreProducts = useCallback(async () => {
    setLoading(true);
   const newProduct = CreateRandomProduct(new Date().toDateString());
        setProducts((prevProd) => [...prevProd, newProduct]);    
    setLoading(false);
  }, [next]);

  useEffect(() => {
    
      loadMoreProducts();
    
  }, [loadMoreProducts]);

  const lastProductElementRef = useCallback(
    (node: HTMLLIElement) => {
      if (loading ) return; 
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setNext((prev) => prev + 1); 
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <div>
      <ul>
        {products.map((item, index) => (
          <li
            key={item.id} 
            ref={products.length === index + 1 ? lastProductElementRef : null}
          >
           <OperationShop   image ={item.photo} price={item.price} name= {item.name} category_name= {item.category.name} description= {item.desc} />
     
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};
