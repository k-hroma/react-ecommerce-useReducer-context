
import { CardProduct } from '../components/CardProduct'
import '../styles/components/products.css'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const Products = () => {
  // contexto
  const { products, loading, error } = useContext(ProductContext)
  console.log(products)

  if (loading) return <p>Cargando productos...</p>
  if (error) return <p>Error al cargar productos</p>

  return (
    <>
    <section className="product-grid">
      <div className="grid-container">
        {products.map((product) => (
          <CardProduct
            id={product.id }
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}           
          />
        ))}
      </div>
    </section>
    </>
  )
}

export { Products }