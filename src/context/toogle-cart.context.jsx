import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // Find if cartItems contains productoAdd
  //console.log(cartItems, productToAdd, "here is the error");
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    // If found, increment quantity
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //return new array with modified cartItems/ new cart Item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
// As the actual value that you want to access
export const ToogleCartContext = createContext({
  toggleCart: false,
  setToggleCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

// we allaways need a provider
export const ToogleCartProvider = ({ children }) => {
  const [toggleCart, setToggleCart] = useState(false);

  //console.log(value);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    //console.log(productToAdd, cartItems);
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { toggleCart, setToggleCart, addItemToCart, cartItems };

  return (
    <ToogleCartContext.Provider value={value}>
      {children}
    </ToogleCartContext.Provider>
  );
};
