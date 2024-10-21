import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler, ReactElement, ReactNode } from "react";
import Styles from './operation-shop-short.module.css';
import { compareAsc, format } from "date-fns";

export interface OperationShopProps {
    price: number | null;
    image: string | null;
    name: string | null;
    category_name: string | null;
    description: string | null;
}

export const OperationShop: React.FC<OperationShopProps> = ({price,image, name,category_name, description }) => {
   
    return (
        <div className={Styles.wrap}>
            <div className= {Styles.product}>
                <img src={require("../../assets/" + image)}  />
            </div>
             <label htmlFor="price">Сумма</label>
             <input type="number" id="price"  min="10" max="10000000000" value={price} />
             <label htmlFor="name">Наименование</label>
             <input type="text"  id = "name" value={name} />
             <label htmlFor="category">Категория</label>
             <input type="text"  id = "category" value={category_name} />
             <label htmlFor="descr">Описание</label>
             <textarea  id = "descr" >
                {description.length > 250 ?
                `${description.substring(0, 250)}...` : description}
             </textarea>
             <button type="button">В корзину</button>
             
        </div>
      );
}
