import { useMemo, useReducer } from "react"
import { CartContext } from './CartContext'

// REDUCER - fuera del componente (no necesita props ni estado del componente)
const cartReducer = (state, action) => {
  switch (action.type) {
    
    case '[CART Add Product]': {
      const product = action.payload
      const exists = state.find(item => item.id === product.id)
      
      if (exists) {
        // Ya existe: incrementar cantidad
        return state.map(item => 
          item.id === product.id 
            //Spread para no mutar el objeto original
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      // No existe: agregar con quantity 1
      return [...state, { ...product, quantity: 1 }]
    }

    case '[CART Remove Product]': {
      const id = action.payload
      return state.filter(item => item.id !== id)
    }

    case '[CART Increment Quantity]': {
      const id = action.payload
      return state.map(item => 
        item.id === id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    }

    case '[CART Decrement Quantity]': {
      const id = action.payload
      return state.map(item => 
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    }


    default:
      return state
  }
}

const CartProvider = ({ children }) => {
  const initialState = [];

  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  const cartCount = useMemo(() =>
    cartItems.reduce((sum, item) => sum + item.quantity, 0)
  , [cartItems]);

  const cartTotal = useMemo(() =>
    cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  , [cartItems]);

  // Funciones que dispatchan
  const addToCart = (product) => {
    dispatch({
      type: '[CART Add Product]',
      payload: product
    })
  }

  const removeFromCart = (id) => {
    dispatch({
      type: '[CART Remove Product]',
      payload: id
    })
  }

  const incrementQuantity = (id) => {
    dispatch({
      type: '[CART Increment Quantity]',
      payload: id
    })
  }

  const decrementQuantity = (id) => {
    dispatch({
      type: '[CART Decrement Quantity]',
      payload: id
    })
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider }