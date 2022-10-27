import { createContext, useState } from "react";

// As the actual value that you want to access
export const ToogleCartContext = createContext({
  toggleCart: false,
  setToggleCart: () => {},
});

// we allaways need a provider
export const ToogleCartProvider = ({ children }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const value = { toggleCart, setToggleCart };
  console.log(value);

  return (
    <ToogleCartContext.Provider value={value}>
      {children}
    </ToogleCartContext.Provider>
  );
};
