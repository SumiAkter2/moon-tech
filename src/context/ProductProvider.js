import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
export const PRODUCT_CONTEXT = createContext();
const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("Product.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setData(data);
      });
  }, []);
  const value = { data };
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
