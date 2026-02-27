const API_URL = "https://fakestoreapi.com/products";

const productService = {
  getAll: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener productos");
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Error al obtener producto");
    return response.json();
  },
};

export { productService };
