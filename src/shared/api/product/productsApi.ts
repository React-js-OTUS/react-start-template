import { Product } from 'src/homeworks/ts1/3_write';
import { instance } from 'src/shared/api/base/instance';

interface ProductsResponse {
  data?: Product[];
}

type Params = {
  name: string;
  photo?: string;
  desc?: string;
  oldPrice?: number;
  price: number;
  categoryId: string;
};

const get = async function (pageNumber = 1, pageSize = 50): Promise<Product[]> {
  try {
    const url = `/products?${new URLSearchParams({
      pagination: JSON.stringify({
        pageSize: pageSize,
        pageNumber: pageNumber,
      }),
      sorting: JSON.stringify({ type: 'DESC', field: 'id' }),
    }).toString()}`;

    const response = await instance.get<ProductsResponse>(url);

    return response.data.data ?? [];
  } catch (error) {
    return [];
  }
};

const getById = async function (id: string): Promise<Product> {
  const response = await instance.get<Product>(`/products/${id}`);
  return response.data;
};

const create = async function (data: Params): Promise<Product> {
  const response = await instance.post<Product>(`/products`, data);
  return response.data;
};

const update = async function (id: string, data: Params): Promise<Product> {
  const response = await instance.put<Product>(`/products/${id}`, data);
  return response.data;
};

export const ProductsApi = {
  get,
  getById,
  create,
  update,
};
