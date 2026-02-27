import { useState, useEffect } from "react";
import { productService } from "../services/productService";
import { showError } from "../utils/alerts";

// hook que solo debe encargarse de traer Productos
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getAll();
        setProducts(data);
      } catch (err) {
        setError(err.message);
        showError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []); // ← Array vacío, se ejecuta una vez

  return { products, loading, error };
};
