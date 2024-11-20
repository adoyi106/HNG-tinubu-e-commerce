import { createContext, useContext, useState } from "react";

const CartContext = createContext();

//eslint-disable-next-line
function CartProvider({ children }) {
  const [selectedItems, setSelectedItems] = useState();

  const updateSelectedItems = (items) => {
    setSelectedItems(items);
  };

  return (
    <CartContext.Provider value={{ selectedItems, updateSelectedItems }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("CartContext was used outside CartContext Provider");
  }
  return context;
}
//eslint-disable-next-line
export { useCart, CartProvider };
