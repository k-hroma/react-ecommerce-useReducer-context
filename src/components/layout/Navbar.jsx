import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import '../../styles/components/navbar.css'

const Navbar = ({ onOpenCart, cartCount }) => {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">🌈La Palacio Libros</div>

        <nav className="nav-links">
          <NavLink to="/">
            Home
          </NavLink>
          
          <NavLink to="/products">
            Products
          </NavLink>
          
          <NavLink to="/contacto" >
            Contacto
          </NavLink>
        </nav>

        <button className="cart-button" onClick={onOpenCart}>
          <Badge badgeContent={cartCount} color="primary">
            <ShoppingCart />
          </Badge>
        </button>
      </div>
    </header>
  );
};

export { Navbar };