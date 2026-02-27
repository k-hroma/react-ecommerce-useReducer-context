import { createContext, useContext } from "react";

const ProductContext = createContext();

const useProd = () => useContext(ProductContext);

export { ProductContext, useProd };
