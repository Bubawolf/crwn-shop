import { createContext, useState, useEffect } from "react";

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

const removeCartItem = (cartItems, removeProduct) => {
  // Find if cartItems contains productoAdd
  //console.log(cartItems, productToAdd, "here is the error");
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === removeProduct.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeProduct.id);
  }
  // If found, decrease quantity
  return cartItems.map((cartItem) =>
    cartItem.id === removeProduct.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteItem = (cartItems, removeProduct) => {
  return cartItems.filter((cartItem) => cartItem.id !== removeProduct.id);
};

// As the actual value that you want to access
export const ToogleCartContext = createContext({
  toggleCart: false,
  setToggleCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  cartTotal: 0,
});

// we allaways need a provider
export const ToogleCartProvider = ({ children }) => {
  const [toggleCart, setToggleCart] = useState(false);

  //console.log(value);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (acc, cur) => acc + cur.quantity * cur.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const deleteItemFromCart = (deleteProduct) => {
    setCartItems(deleteItem(cartItems, deleteProduct));
  };

  const removeItemFromCart = (removeProduct) => {
    console.log(removeProduct);
    setCartItems(removeCartItem(cartItems, removeProduct));
  };

  const addItemToCart = (productToAdd) => {
    //console.log(productToAdd, cartItems);
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    toggleCart,
    setToggleCart,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    deleteItemFromCart,
    cartTotal,
  };

  return (
    <ToogleCartContext.Provider value={value}>
      {children}
    </ToogleCartContext.Provider>
  );
};
