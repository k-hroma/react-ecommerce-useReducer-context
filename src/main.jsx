import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from './context/CartProvider'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <CartProvider>
      <ProductProvider>  
        <App/>
      </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
