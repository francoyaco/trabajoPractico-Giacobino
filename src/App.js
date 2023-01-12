import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Inicio from './components/Inicio';

function App() {
  return (
    <div className="App">
      <header>
      <ItemListContainer greeting="Bienvenidos" />
      <NavBar />
      
      </header>
      <Inicio/>
    </div>
    
  );
}

export default App;
