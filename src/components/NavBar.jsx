import "../components/style/style.css"
import "../components/ItemListContainer"
import "../components/CartWidget"
import CartWidget from "../components/CartWidget";

export default function NavBar() {
    return ( 
        <>
    <div>
 
  <nav>
    <ul>
      <li><a href="" className="lista">Inicio</a></li>
      <li><a href="" className="lista">Nosotros</a></li>
      <li><a href="" className="lista">Tienda</a></li>
      <li><a href="" className="lista"><CartWidget /></a></li>
    </ul>
  </nav>
</div>
</>
);
}
