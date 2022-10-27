import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";

// As the actual value that you want to access
export const ProductsContext = createContext({
  products: [],
});

// we allaways need a provider
export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(PRODUCTS);
  const value = { products, setProduct };
  console.log(value);
  //signOutProduct();
  /*
  useEffect(() => {
    console.log('hey');
    });
    return ;
  }, []);
*/
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
