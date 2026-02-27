import { createContext, useContext } from "react";

// crea contexto
const CartContext = createContext();

// Hook personalizado que expone API semántica
const useCart = () => {
  // se consume el contexto, es decir lo que el provider provea
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }

  return {
    ...context, // devuelve todo lo del Provider (cartItems, funciones)
    isInCart: (id) => context.cartItems.some((item) => item.id === id), // helper para saber si un producto esta o no en el carrito
    getItemQuantity: (id) => {
      const item = context.cartItems.find((item) => item.id === id);
      return item?.quantity || 0;

      //Spread para no repetir, luego agrego funciones que transforman los datos crudos en operaciones semánticas.
    },
  };
};

export { CartContext, useCart };
