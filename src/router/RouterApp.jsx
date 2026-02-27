import { Route, Routes } from "react-router-dom"
import { Home } from '../views/Home'
import { Products } from '../views/Products'
import { Contacto } from '../views/Contacto'


const RouterApp = () => { 
  return (
    
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/products" element={<Products />} /> 
        <Route path="/contacto" element={ <Contacto/> }/>
      </Routes>

  )
}

export { RouterApp }