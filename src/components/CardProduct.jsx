import { useCart } from '../context/CartContext';
import '../styles/components/cardProduct.css'


const CardProduct = ({
  id,
  title,
  description,
  image,
  price,
}) => {

  const { isInCart, addToCart, removeFromCart } = useCart()
  const added = isInCart(id)

  return (
    <article className="card-product">
      <div className="card-image-wrapper">
        <img
          src={image}
          alt={title}
          className="card-image"
          loading="lazy"
        />
        <div className="card-image-overlay"></div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        <div className="card-footer">
          <span className="card-price">${price}</span>

          {added ? (
            <button
              type="button"
              className="card-button"
              onClick={()=>removeFromCart(id)}
            >
              Quitar
            </button>
          ) : (
            <button
              type="button"
              className="card-button"
                onClick={() => addToCart({id, title, price, image})}
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export { CardProduct }