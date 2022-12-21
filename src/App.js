import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <div className="App">
      <header>
      <ItemListContainer greeting="Bienvenidos" />
      <NavBar />
      
      </header>
    </div>
  );
}

export default App;
