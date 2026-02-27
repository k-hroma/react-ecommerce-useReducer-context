import { ProductContext } from './ProductContext'
import { useProducts } from '../hooks/useProducts'

const ProductProvider = ({ children }) => {

  const {products,loading, error} = useProducts()
  
  return (
    
      <ProductContext.Provider value={{products, loading, error}}>
        {children}
      </ProductContext.Provider>
  
  )
 }

export { ProductProvider }