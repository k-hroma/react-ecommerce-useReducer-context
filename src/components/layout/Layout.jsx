import { useState } from "react"
import { Navbar } from "./Navbar"
import { CartSidebar } from "../../features/cart/CartSidebar"
import { useCart } from "../../context/CartContext"


const Layout = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartCount } = useCart()


  return (
    <>
      <header>
        <Navbar 
          onOpenCart={() => setIsCartOpen(true)} 
          cartCount={cartCount}
        />
      </header>
      
      <main>{children}</main>
      
      <footer></footer>

      <CartSidebar 
        isOpen={isCartOpen} //estado que controla la visibilidad (booleano)
        onClose={() => setIsCartOpen(false)}
      />
    </>
  )
}

export { Layout }