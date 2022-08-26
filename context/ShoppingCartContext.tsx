import React, { createContext, ReactNode, useContext } from 'react';

const ShoppingCartContext = createContext({});

export default function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShoppingCartProviderProps = {
  children: ReactNode;
};
export default function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
