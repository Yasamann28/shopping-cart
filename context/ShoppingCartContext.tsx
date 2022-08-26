import React, { createContext, ReactNode, useContext } from 'react';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

const ShoppingCartContext = createContext({});
export default function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export default function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
