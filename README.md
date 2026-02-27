# Aplicación de e-commerce desarrollada con React.

Proyecto base para practicar arquitectura escalable, manejo de estado con Context API y patrones profesionales.

## 🚀 Tecnologías

| Tecnología               | Uso                |
| ------------------------ | ------------------ |
| React 19.2.0             | Biblioteca UI      |
| React Router DOM         | Navegación         |
| Context API + useReducer | Estado global      |
| Fake Store API           | Datos de productos |
| Material UI              | Componentes de UI  |

## 📁 Arquitectura

```
src/
├── components/ # Componentes reutilizables
│ ├── layout/ # Layout, Navbar
│ └── CardProduct.jsx # Tarjeta de producto
├── context/ # Estado global
│ ├── CartContext.jsx # Carrito (useReducer + useMemo)
│ └── ProductContext.jsx # Productos API
├── features/ # Módulos por funcionalidad
│ └── cart/
│ └── CartSidebar.jsx
├── hooks/ # Custom hooks
│ └── useProducts.js # Fetch de productos
├── services/ # Lógica de API
│ └── productService.js
├── utils/ # Helpers
│ └── alerts.js
└── views/ # Páginas
├── Home.jsx
├── Products.jsx
└── Contacto.jsx
```

## ✨ Características implementadas

Catálogo de productos con fetch a API externa
Carrito de compras con persistencia de estado
Agregar/quitar/modificar cantidad de items
Cálculo de totales con useMemo (optimización)
Sidebar de carrito deslizable
Navegación entre vistas

## 🛒 Patrones aplicados

| Patrón                              | Implementación                          |
| ----------------------------------- | --------------------------------------- |
| **Provider Pattern**                | CartContext, ProductContext             |
| **Custom Hooks**                    | useCart, useProducts                    |
| **Reducer Pattern**                 | cartReducer para lógica de carrito      |
| **Memoization**                     | cartCount, cartTotal con useMemo        |
| **Separación de responsabilidades** | Services, hooks, context independientes |

## 🚦 Estado del proyecto

[x] Estructura base
[x] Routing
[x] Fetch de productos
[x] Carrito funcional
[ ] Persistencia localStorage
[ ] Checkout
[ ] Tests

🏃 Cómo
bash

```
npm install
npm run dev
```

## 📚 Aprendizajes clave

Uso de useReducer para lógica de estado compleja
Diferencia entre estado local y global
Optimización con useMemo para derivados
Arquitectura escalable con Context API
Desarrollado como ejercicio de práctica en React.
