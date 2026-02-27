
import './CartSidebar.css'
import { useCart } from '../../context/CartContext'

const CartSidebar = ({ isOpen, onClose }) => {

  const { cartItems, cartTotal, removeFromCart, incrementQuantity, decrementQuantity } = useCart()


  return (
    <>
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      
      <aside className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-title">Tu Carrito</h2>
          <button className="cart-close" onClick={onClose}>
            <span className="close-line"></span>
            <span className="close-line"></span>
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="empty-icon">🛒</div>
              <p>Tu carrito está vacío</p>
              <span>Agrega algunos productos para comenzar</span>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                
                <div className="item-details">
                  <h4 className="item-title">{item.title}</h4>
                  <span className="item-price">${item.price}</span>
                  
                  <div className="item-controls">
                    <div className="quantity-selector">
                      <button
                        className="qty-btn"
                        onClick={() => decrementQuantity(item.id)}
                        disabled={item.quantity === 1}  // Opcional: deshabilitar en 1
                      >−</button>
                      <span className="qty-value">{item.quantity}</span>
                      <button className="qty-btn"
                      onClick={() => incrementQuantity(item.id)}
                      >+</button>
                    </div>
                    
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >Eliminar</button>
                  </div>
                </div>
                
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Envío</span>
                <span className="free">Gratis</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <button className="checkout-btn">
              Finalizar Compra
              <span className="btn-arrow">→</span>
            </button>
            
            <button className="continue-btn" onClick={onClose}>
              Seguir Comprando
            </button>
          </div>
        )}
      </aside>
    </>
  )
}

export { CartSidebar }