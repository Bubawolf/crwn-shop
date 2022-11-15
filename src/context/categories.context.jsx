import { createContext, useState, useEffect } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";

/*
Pull data from json to firestore
import SHOP_DATA from "../shop-data.js";

*/

// As the actual value that you want to access
export const CategoriesContext = createContext({
  categoriesMap: {},
});

// we allaways need a provider
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // fetch categories from json, just do it once
  /*
  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);
  */

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap, setCategoriesMap };

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
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
